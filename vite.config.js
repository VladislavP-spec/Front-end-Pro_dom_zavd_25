// vite.config.js
import { defineConfig } from 'vite';
import ViteReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [ViteReact()],
  server: {
    proxy: {
      '/api': {
        target: 'https://swapi.dev',
        changeOrigin: true,
      },
    },
  },
});
