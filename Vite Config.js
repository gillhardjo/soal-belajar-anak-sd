import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Hapus tanda komentar di bawah ini JIKA deploy ke GitHub Pages
  // base: "/nama-repository-anda/", 
})