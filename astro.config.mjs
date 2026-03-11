import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://trucos125.com', // Tu dominio real
  integrations: [mdx(), sitemap()],
});