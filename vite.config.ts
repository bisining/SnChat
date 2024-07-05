import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  server: {
    open: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: '@views',
        replacement: fileURLToPath(new URL('./src/views', import.meta.url))
      },
      {
        find: '@css',
        replacement: fileURLToPath(new URL('./src/assets/css', import.meta.url))
      },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url))
      }
    ]
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames({ name }) {
          if (name?.endsWith('.css')) return 'css/[name].[hash].[ext]'
          if (['png', 'jpg', 'svg'].some((ext) => name?.endsWith(ext)))
            return 'img/[name].[hash].[ext]'
          return 'assets/[name].[hash].[ext]'
        }
      }
    }
  }
})
