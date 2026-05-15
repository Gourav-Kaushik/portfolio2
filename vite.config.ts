import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('three-stdlib') || id.includes('three')) return 'three'
          if (id.includes('@react-three/fiber') || id.includes('@react-three/drei')) return 'react-three'
          if (id.includes('gsap')) return 'gsap'
          if (id.includes('react-dom') || id.includes('react') || id.includes('react-router-dom')) return 'vendor'
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['three', 'gsap', 'lenis']
  }
});
