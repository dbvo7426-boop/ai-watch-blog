#!/usr/bin/env node
// 公式ブログ/リリースノートを定期的にチェックし、新着があれば
// src/content/posts/ に draft: true のスタブ記事を作成するウォッチャー。
//
// 実行: node scripts/watch.mjs
// 初回実行時は各ソースの現状を「既知」として記録するだけで、下書きは作らない
// (過去記事が一気に大量生成されるのを防ぐため)。2回目以降の実行で検知した
// 新着分だけスタブを作る。本文執筆・重要度判定は scripts/generate.mjs の役割。

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'src/content/posts');
const STATE_FILE = path.join(__dirname, 'data/seen.json');

const USER_AGENT = 'ai-watch-blog-watcher/0.1 (+diff detection script)';
const FETCH_TIMEOUT_MS = 15_000;

// 監視対象。kind: 'rss' は RSS/Atom フィード、'sitemap' はXMLサイトマップから
// filter に一致するURLだけを拾う(Anthropicは公開RSSが無いためsitemap経由)。
const SOURCES = [
  {
    category: 'claude',
    label: 'Claude (Anthropic)',
    kind: 'sitemap',
    url: 'https://www.anthropic.com/sitemap.xml',
    filter: (loc) => loc.includes('/news/'),
  },
  {
    category: 'chatgpt',
    label: 'ChatGPT (OpenAI)',
    kind: 'rss',
    url: 'https://openai.com/news/rss.xml',
  },
  {
    category: 'gemini',
    label: 'Gemini (Google)',
    kind: 'rss',
    url: 'https://blog.google/products/gemini/rss/',
  },
  {
    category: 'copilot',
    label: 'Copilot (GitHub)',
    kind: 'rss',
    url: 'https://github.blog/changelog/label/copilot/feed/',
  },
  {
    category: 'stablediffusion',
    label: 'Stable Diffusion (Stability AI)',
    kind: 'rss',
    url: 'https://stability.ai/news-updates/rss.xml',
  },
];

function decodeEntities(str) {
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTag(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  return m ? decodeEntities(m[1]) : '';
}

function extractAttr(html, attrPairs) {
  // attrPairsの各 [attrName, attrValue] の組み合わせで
  // <meta name/property=".." content="..">を両順序で探す
  for (const [key, value] of attrPairs) {
    const patterns = [
      new RegExp(`<meta[^>]+${key}=["']${value}["'][^>]+content=["']([^"']*)["']`, 'i'),
      new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+${key}=["']${value}["']`, 'i'),
    ];
    for (const re of patterns) {
      const m = html.match(re);
      if (m) return decodeEntities(m[1]);
    }
  }
  return '';
}

function cleanTitle(title) {
  return title.replace(/\s*[|–—-]\s*(Anthropic|OpenAI|Google|GitHub)\b.*$/i, '').trim();
}

function slugFromUrl(url, fallback) {
  let last = fallback;
  try {
    const u = new URL(url);
    last = u.pathname.replace(/\/+$/, '').split('/').filter(Boolean).pop() || fallback;
  } catch {
    // URL解析に失敗したらfallbackを使う
  }
  return last
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || fallback;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function escapeYamlString(s) {
  return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': USER_AGENT },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

function parseRss(xml) {
  const items = [];
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  for (const block of blocks) {
    const link = extractTag(block, 'link');
    if (!link) continue;
    const pubDate = extractTag(block, 'pubDate');
    items.push({
      url: link.trim(),
      title: cleanTitle(extractTag(block, 'title')),
      description: extractTag(block, 'description'),
      date: pubDate ? new Date(pubDate) : new Date(),
    });
  }
  return items;
}

function parseSitemap(xml, filter) {
  if (/<sitemapindex/i.test(xml)) {
    console.warn('  ! sitemapindex形式(サブサイトマップ分割)には未対応のためスキップします');
    return [];
  }
  const items = [];
  const blocks = xml.match(/<url>[\s\S]*?<\/url>/gi) || [];
  for (const block of blocks) {
    const loc = extractTag(block, 'loc');
    if (!loc || (filter && !filter(loc))) continue;
    const lastmod = extractTag(block, 'lastmod');
    items.push({
      url: loc.trim(),
      title: '',
      description: '',
      date: lastmod ? new Date(lastmod) : new Date(),
    });
  }
  return items;
}

// サイトマップにはタイトル/概要が無いため、新着ページだけ実際にHTMLを取得して補う
async function enrichFromPage(url) {
  try {
    const html = await fetchText(url);
    const title =
      extractAttr(html, [['property', 'og:title']]) || extractTag(html, 'title');
    const description =
      extractAttr(html, [['property', 'og:description']]) ||
      extractAttr(html, [['name', 'description']]);
    return { title: cleanTitle(title), description };
  } catch (err) {
    console.warn(`  ! ページ取得に失敗、タイトル/概要は空のままにします: ${url} (${err.message})`);
    return { title: '', description: '' };
  }
}

async function loadState() {
  try {
    return JSON.parse(await readFile(STATE_FILE, 'utf-8'));
  } catch {
    return {};
  }
}

async function saveState(state) {
  await mkdir(path.dirname(STATE_FILE), { recursive: true });
  await writeFile(STATE_FILE, JSON.stringify(state, null, 2) + '\n', 'utf-8');
}

function buildDraftMarkdown({ title, description, date, category, source }) {
  const safeTitle = title || `[要確認] 新着更新 (${source})`;
  const safeDescription =
    (description || '(自動検知: 概要は未取得です。内容を確認して埋めてください)').slice(0, 120);
  return `---
title: ${escapeYamlString(safeTitle)}
description: ${escapeYamlString(safeDescription)}
pubDate: ${date.toISOString().slice(0, 10)}
category: ${category}
type: news
tags: []
source: ${source}
draft: true
---

<!-- watch.mjs が自動検知したスタブ記事です。generate.mjs 実行後、または手動で本文を追記してください。 -->

一次情報: ${source}
`;
}

async function writeDraftIfAbsent(filepath, content) {
  try {
    await writeFile(filepath, content, { flag: 'wx' });
    return true;
  } catch (err) {
    if (err.code === 'EEXIST') return false;
    throw err;
  }
}

async function run() {
  const state = await loadState();
  let createdCount = 0;

  for (const src of SOURCES) {
    console.log(`\n[${src.label}] ${src.url}`);
    let items = [];
    try {
      const text = await fetchText(src.url);
      items = src.kind === 'rss' ? parseRss(text) : parseSitemap(text, src.filter);
    } catch (err) {
      console.error(`  ! 取得失敗: ${err.message}`);
      continue;
    }

    const isFirstRun = !state[src.category];
    const seen = new Set(state[src.category] || []);

    if (isFirstRun) {
      state[src.category] = items.map((i) => i.url);
      console.log(`  初回実行: ${items.length}件を既知として記録(下書きは作成しません)`);
      continue;
    }

    const fresh = items.filter((i) => !seen.has(i.url));
    if (fresh.length === 0) {
      console.log('  新着なし');
      continue;
    }

    await mkdir(POSTS_DIR, { recursive: true });

    for (const item of fresh) {
      let { title, description } = item;
      if (!title) {
        const enriched = await enrichFromPage(item.url);
        title = enriched.title;
        description = description || enriched.description;
      }

      const slug = slugFromUrl(item.url, src.category);
      const filename = `${todayIso()}-${src.category}-${slug}.md`;
      const filepath = path.join(POSTS_DIR, filename);
      const content = buildDraftMarkdown({
        title,
        description,
        date: item.date,
        category: src.category,
        source: item.url,
      });

      const written = await writeDraftIfAbsent(filepath, content);
      console.log(written ? `  + ${filename}` : `  (既存ファイルのためスキップ: ${filename})`);
      if (written) createdCount++;

      seen.add(item.url);
    }

    state[src.category] = Array.from(seen);
  }

  await saveState(state);
  console.log(`\n合計 ${createdCount} 件の下書きを作成しました。`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
