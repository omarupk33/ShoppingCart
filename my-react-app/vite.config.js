import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment: 'jsdom',
    setupFiles: '/home/omar/Odin_project.py/ShoppingCort/my-react-app/src/tests/setup.js',
  }
})

