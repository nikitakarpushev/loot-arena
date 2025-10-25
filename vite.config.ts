import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: parseInt(process.env.PORT || '5173'),
    strictPort: true
  },
  preview: {
    host: true,
    port: parseInt(process.env.PORT || '5173')
  }
});
