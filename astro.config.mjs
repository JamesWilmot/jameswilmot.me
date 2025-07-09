import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';
import solidJs from "@astrojs/solid-js";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: 'https://jameswilmot.me',
  integrations: [
    mdx(), 
    svelte(), 
    solidJs(), 
    favicons({
      input: {
        favicons: [
          "public/favicon.jpg",
        ], 
      },
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank'
    }]]
  }
});
