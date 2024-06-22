import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin({ eslintOptions: { cache: false } })],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
