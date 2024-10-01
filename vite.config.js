import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // external: ['clsx'], // Mark 'clsx' as an external dependency
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Aliasing for better path resolution
    },
  },
});




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })





