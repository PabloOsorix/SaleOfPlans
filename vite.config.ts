import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@tests": path.resolve(__dirname, "./tests")
      }
    },
     build: {
    rollupOptions: {
      external: ['@splidejs/splide'],
    },
  },
  })