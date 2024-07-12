import { extractFilename } from '@/utils/file'
import type { App, Component } from 'vue'

// 自动全局注册全局组件
export const globalComponents = {
  install(app: App) {
    const fileMap = import.meta.glob('./**/*.vue', {
      eager: true,
      import: 'default'
    })

    for (const path in fileMap) {
      const compName = extractFilename(path)
      app.component(compName, fileMap[path] as Component)
    }
  }
}
