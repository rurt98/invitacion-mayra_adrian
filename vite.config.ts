import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Usar rutas absolutas para mejor compatibilidad con Firebase Hosting
  publicDir: 'public', // Directorio público para assets estáticos
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
