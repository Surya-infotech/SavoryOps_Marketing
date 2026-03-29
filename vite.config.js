import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { smartPosHtmlPlugin } from './vite/smartPosHtmlPlugin.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    smartPosHtmlPlugin(),
    tailwindcss(),
  ],
})
