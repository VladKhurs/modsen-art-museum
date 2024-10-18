import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/assets', replacement: '/src/assets' },
      { find: '@/components', replacement: '/src/components' },
    ],
  },
});
