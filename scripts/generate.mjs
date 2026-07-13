#!/usr/bin/env node
// watch.mjs が作った下書きスタブ(タイトル・sourceのみ)に、Claude APIで
// 重要度判定+記事本文を生成して書き戻すスクリプト。
//
// 実行: node scripts/generate.mjs (要 ANTHROPIC_API_KEY 環境変数)
// ANTHROPIC_API_KEY が未設定の場合は、エラーにせず何もせず終了する
// (watch.mjs単体でも運用できるようにするため)。

import Anthropic from '@anthropic-ai/sdk';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'src/content/posts');

// このマーカーを含む記事だけが「未処理のスタブ」= 生成対象
const STUB_MARKER = 'watch.mjs が自動検知したスタブ記事です';
const USER_AGENT = 'ai-watch-blog-generator/0.1';
const FETCH_TIMEOUT_MS = 20_000;
const MODEL = 'claude-opus-4-8';
const MAX_SOURCE_CHARS = 12_000;

const CATEGORY_LABELS = {
  claude: 'Claude (Anthropic)',
  chatgpt: 'ChatGPT (OpenAI)',
  gemini: 'Gemini (Google)',
  copilot: 'GitHub Copilot',
  other: 'その他のAIツール',
};

const RESULT_SCHEMA = {
  type: 'object',
  properties: {
    important: {
      type: 'boolean',
      description: '読者にとって記事化する価値がある更新かどうか。既存機能の軽微な修正や内容の薄い告知はfalse',
    },
    reason: { type: 'string', description: 'important判定の理由(日本語1〜2文)' },
    title: { type: 'string', description: '記事タイトル(日本語)' },
    description: { type: 'string', description: '一覧・OGP用の要約。120字程度(日本語)' },
    tags: {
      type: 'array',
      items: { type: 'string' },
      description: '記事に付けるタグ。2〜4個(日本語)',
    },
    body: {
      type: 'string',
      description: 'Markdown形式の記事本文(日本語、見出しは##から、200〜400字程度)',
    },
  },
  required: ['important', 'reason', 'title', 'description', 'tags', 'body'],
  additionalProperties: false,
};

const SYSTEM_PROMPT = `あなたは「AI Watch」という、主要AIツール(Claude / ChatGPT / Gemini / GitHub Copilot)の
新機能・アップデートを定点観測して記事化するブログの編集アシスタントです。

与えられた一次情報(公式発表ページの本文抜粋)だけを根拠に、日本語の読者向けニュース記事を書いてください。
- 誇張や煽り文句を避け、「何が変わったのか」「誰にとって何が嬉しいのか」を簡潔に伝える
- 一次情報に書かれていないことを推測・創作しない
- 記事は下書きとして人間が公開前に確認するので、不明点があれば無理に断定せず素直に書く
- 些細な修正・軽微なUI変更・内容の薄い告知など、記事化する価値が低いものは important: false と判定する`;

function extractFrontmatterField(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  if (!m) return '';
  let value = m[1].trim();
  if (/^".*"$/.test(value)) {
    value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  return value;
}

function splitFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  return m ? { frontmatter: m[1] } : null;
}

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchArticleText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': USER_AGENT },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    return htmlToText(html).slice(0, MAX_SOURCE_CHARS);
  } finally {
    clearTimeout(timer);
  }
}

function escapeYamlString(s) {
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function buildYamlArray(items) {
  return `[${items.map((t) => escapeYamlString(t)).join(', ')}]`;
}

function buildMarkdown({ pubDate, category, type, source, draft, result }) {
  const { title, description, tags, body, important, reason } = result;
  const finalTags = important ? tags : [...tags, '要確認'];
  const notice = important
    ? ''
    : `> **Claude判定: 重要度が低い可能性があります** — ${reason}\n\n`;
  return `---
title: ${escapeYamlString(title)}
description: ${escapeYamlString(description.slice(0, 120))}
pubDate: ${pubDate}
category: ${category}
type: ${type}
tags: ${buildYamlArray(finalTags)}
source: ${source}
draft: ${draft}
---

${notice}${body}

---

一次情報: ${source}
`;
}

const client = new Anthropic(); // process.env.ANTHROPIC_API_KEY を使用

// 戻り値: true=生成して書き込んだ / false=スキップ(対象外・取得失敗など)
async function generateForFile(filepath) {
  const raw = await readFile(filepath, 'utf-8');
  if (!raw.includes(STUB_MARKER)) return false;

  const split = splitFrontmatter(raw);
  if (!split) {
    console.warn(`  ! frontmatterを解析できませんでした: ${path.basename(filepath)}`);
    return false;
  }
  const { frontmatter } = split;

  const category = extractFrontmatterField(frontmatter, 'category') || 'other';
  const type = extractFrontmatterField(frontmatter, 'type') || 'news';
  const pubDate = extractFrontmatterField(frontmatter, 'pubDate');
  const source = extractFrontmatterField(frontmatter, 'source');
  const draft = extractFrontmatterField(frontmatter, 'draft') || 'true';
  const existingTitle = extractFrontmatterField(frontmatter, 'title');

  if (!source) {
    console.warn(`  ! sourceが見つかりません: ${path.basename(filepath)}`);
    return false;
  }

  let articleText;
  try {
    articleText = await fetchArticleText(source);
  } catch (err) {
    console.warn(`  ! 一次情報の取得に失敗: ${source} (${err.message})`);
    return false;
  }

  const userPrompt = `# カテゴリ
${CATEGORY_LABELS[category] || category}

# 元記事タイトル(自動取得・未編集)
${existingTitle}

# 一次情報(公式発表ページの本文抜粋)
${articleText}`;

  let response;
  try {
    response = await client.messages.create({
      model: MODEL,
      max_tokens: 8000,
      thinking: { type: 'adaptive' },
      system: SYSTEM_PROMPT,
      output_config: { format: { type: 'json_schema', schema: RESULT_SCHEMA } },
      messages: [{ role: 'user', content: userPrompt }],
    });
  } catch (err) {
    if (err instanceof Anthropic.AuthenticationError) throw err;
    console.warn(`  ! Claude API呼び出しに失敗: ${err.message}`);
    return false;
  }

  if (response.stop_reason === 'refusal') {
    console.warn(`  ! Claudeが生成を拒否しました: ${path.basename(filepath)}`);
    return false;
  }

  const textBlock = response.content.find((b) => b.type === 'text');
  if (!textBlock) {
    console.warn(`  ! テキスト応答が見つかりません: ${path.basename(filepath)}`);
    return false;
  }

  let result;
  try {
    result = JSON.parse(textBlock.text);
  } catch (err) {
    console.warn(`  ! JSON解析に失敗: ${path.basename(filepath)} (${err.message})`);
    return false;
  }

  const content = buildMarkdown({ pubDate, category, type, source, draft, result });
  await writeFile(filepath, content, 'utf-8');
  console.log(`  ${result.important ? '✓' : '△'} ${path.basename(filepath)} — ${result.title}`);
  return true;
}

async function run() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.log('ANTHROPIC_API_KEY が設定されていないため、本文生成をスキップします。');
    console.log('(GitHub Secrets または環境変数に ANTHROPIC_API_KEY を設定すると有効になります)');
    return;
  }

  let files;
  try {
    files = await readdir(POSTS_DIR);
  } catch {
    console.log('src/content/posts/ が見つかりません。何もすることがありません。');
    return;
  }

  const targets = files.filter((f) => f.endsWith('.md'));
  let processed = 0;

  for (const file of targets) {
    const filepath = path.join(POSTS_DIR, file);
    try {
      const done = await generateForFile(filepath);
      if (done) {
        processed++;
      }
    } catch (err) {
      if (err instanceof Anthropic.AuthenticationError) {
        console.error('\n! ANTHROPIC_API_KEY が無効です。処理を中断します。');
        break;
      }
      console.warn(`  ! 予期しないエラー(${file}): ${err.message}`);
    }
  }

  console.log(`\n合計 ${processed} 件の下書きに本文を生成しました。`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
