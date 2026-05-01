// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chigasaki.repairwatch.workers.dev',
  output: 'static',
  integrations: [sitemap()],
});
