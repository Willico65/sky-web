import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // El backend en Python (fase 2) escuchará en el puerto 8000.
    proxy: { '/api': 'http://localhost:8000' },
  },
})
