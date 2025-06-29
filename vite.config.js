// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: '/',

    // 🌐 Buraya bu kısmı ekle:
    open: true,
    // Vite otomatik tarayıcı açarken, Chrome tercih et:
    browser: 'chrome' 
  }
})
