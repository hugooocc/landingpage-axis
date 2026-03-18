import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/axis/',
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      host: '187.33.144.10',
      clientPort: 80,
    },
    allowedHosts: ['187.33.144.10'],
  },
})
