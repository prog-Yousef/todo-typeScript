import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: globalThis.process.env.NODE_ENV === "production" ? "/todo-react/" : "/",
});