import { defineConfig } from 'astro/config';


import compress from 'astro-compress';


// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/SaleOfPlans/' : '/',
  integrations: [compress()],
});