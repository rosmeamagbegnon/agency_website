import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'192.168.1.244',
    port:3007
   
  },

  plugins: [react()],
})

