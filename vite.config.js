import url from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = import.meta.env?.VITE_BASE_URL ?? ''
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(url.fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src')
    }
  }
})
