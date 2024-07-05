import { fileURLToPath, URL } from 'node:url'

import { Alias, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

function resolvePath(src: string) {
  return fileURLToPath(new URL(src, import.meta.url))
}

const alias: Alias[] = [
  {
    find: '@',
    replacement: resolvePath('./src')
  },
  {
    find: '@views',
    replacement: resolvePath('./src/views')
  },
  {
    find: '@css',
    replacement: resolvePath('./src/assets/css')
  },
  {
    find: '@components',
    replacement: resolvePath('./src/components')
  }
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  server: {
    open: true
  },
  resolve: {
    alias
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
