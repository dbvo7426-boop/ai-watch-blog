import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.enum([
    'claude',
    'chatgpt',
    'gemini',
    'copilot',
    'perplexity',
    'midjourney',
    'stablediffusion',
    'dalle',
    'grok',
    'deepseek',
    'notebooklm',
    'manus',
    'skywork',
    'devin',
    'genspark',
    'llama',
    'mistral',
    'qwen',
    'sora',
    'runway',
    'elevenlabs',
    'suno',
    'lovable',
    'adept',
    'lindy',
    'cursor',
    'other',
  ]),
  type: z.enum(['news', 'howto', 'review']).default('news'),
  tags: z.array(z.string()).default([]),
  // 一次情報(公式発表)へのリンク。ニュース記事では必須にしたい
  source: z.string().url().optional(),
  // trueの間は本番ビルドに含まれない(下書き)。人間が確認後falseにして公開
  draft: z.boolean().default(false),
  // AIによる重要度判定。本文執筆時に内容を踏まえて明示的に設定する。
  // unrated = 未判定(バッジ非表示。過去記事のデフォルト)
  importance: z.enum(['high', 'medium', 'low', 'unrated']).default('unrated'),
});

// 記事コレクション(日本語)。自動生成パイプラインはこのフォルダに .md を追加していく
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: postSchema,
});

// 記事コレクション(英語)。ファイル名(slug)は日本語版と同じものを使い、posts/postsEnで1対1対応させる
const postsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts-en' }),
  schema: postSchema,
});

export const collections = { posts, postsEn };
