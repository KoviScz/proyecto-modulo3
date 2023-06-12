import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'node_modules'),
      '@': resolve(__dirname, 'src/components'),
    },
  },
  optimizeDeps: {
    include: ['jquery'],
  },
});
