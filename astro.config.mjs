import { defineConfig } from 'astro/config';
import path from 'path';

import compress from 'astro-compress';


// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/SaleOfPlans/' : '/',
  integrations: [compress()],
  markdown: { mode: 'mdx' },
  vite: {
    ssr: {
      external: ['@splidejs/splide'],
    },
  },
});