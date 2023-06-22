import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const cssFileName = 'index.min.css';


export default defineConfig({
  plugins: [react()],
  //arquivos estáticos react
  publicDir: './public',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (file) => {
          return `assets/css/${cssFileName}`
        },
        entryFileNames: (file) => {
          return `assets/js/[name].min.js`
        }
      }
    }
  }
})
