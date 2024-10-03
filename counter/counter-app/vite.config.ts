import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://m1st001.github.io/react-internship/',
  plugins: [react()],
})
