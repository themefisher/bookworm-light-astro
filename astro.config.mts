import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import config from './src/config/config.json';

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : 'http://examplesite.com',
  base: config.site.base_path ? config.site.base_path : '/',
  // for dev server, strictly enforce route matching behavior
  // (so that we remember to add trailing slashes where needed in <a> tags)
  // see https://docs.astro.build/en/reference/configuration-reference/#trailingslash
  //     https://docs.astro.build/en/reference/configuration-reference/#buildformat
  trailingSlash: 'always',
  integrations: [
    react({
      include: [
        './src/**/*.jsx',
        './src/**/*.tsx'
      ],
    }),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
