import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: 独自ドメイン取得後に変更してください
  site: 'https://ai-watch.example.com',
  integrations: [sitemap()],
});
