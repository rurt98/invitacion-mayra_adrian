import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@headlessui/react', '@heroicons/react', 'react-icons'],
          'vendor-utils': ['date-fns'],
          'vendor-forms': ['react-hook-form'],
        },
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
