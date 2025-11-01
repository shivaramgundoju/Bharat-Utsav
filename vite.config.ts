import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    // Ensure Vite uses the same React runtime for all imports to avoid
    // duplicate copies which cause "Invalid hook call" errors.
    dedupe: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
  },
  optimizeDeps: {
    // Prebundle React once so all imports point to the same runtime.
    include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
  },
});
