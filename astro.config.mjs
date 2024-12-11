import { defineConfig } from 'astro/config';
import path from 'path';

import compress from 'astro-compress';


// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/SaleOfPlans/' : '/',
  integrations: [compress()],
  vite: {
    ssr: {
      external: ['@splidejs/splide'],
    },
     css: {
      preprocessorOptions: {
        css: {
          additionalData: '@import "/src/styles/global.css";',
        },
      },
    },
  },
});