import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePluginFonts} from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ['Martian+Mono:300,400,500,700'] // Replace with the Google Fonts you want to include
      }
    })
  ],
  server: {
    port: 3000,
    watch:{
      usePolling: true
    }
  }
})
