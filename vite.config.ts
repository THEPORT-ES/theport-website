import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Custom domain (theport.es) serves from root.
// For project-page preview without CNAME, set VITE_BASE=/theport/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: { exclude: ['maplibre-gl'] },
  base: process.env.VITE_BASE || '/',
})
