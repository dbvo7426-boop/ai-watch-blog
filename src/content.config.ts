import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 記事コレクション。自動生成パイプラインはこのフォルダに .md を追加していく
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
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
      'other',
    ]),
    type: z.enum(['news', 'howto', 'review']).default('news'),
    tags: z.array(z.string()).default([]),
    // 一次情報(公式発表)へのリンク。ニュース記事では必須にしたい
    source: z.string().url().optional(),
    // trueの間は本番ビルドに含まれない(下書き)。人間が確認後falseにして公開
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
