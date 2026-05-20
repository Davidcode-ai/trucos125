import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://trucos125.com',
  integrations: [
    mdx({
      components: {
        Adsense: './src/components/Adsense.astro',
      },
    }),
    sitemap(),
  ],
  image: {
    domains: ['images.unsplash.com'],
  },
});