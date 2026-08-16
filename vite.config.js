import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // вынесем React в отдельный чанк
          if (id.includes('node_modules/react')) { return 'react' }
          if (id.includes('/src/components/MahjongDomino.jsx')) { return 'MahjongDomino' }
        },
      },
    },
  },
})
