import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Vercel発行のURL。独自ドメイン取得後はそちらに変更してください
  site: 'https://ai-watch-blog.vercel.app',
  integrations: [sitemap()],
});
