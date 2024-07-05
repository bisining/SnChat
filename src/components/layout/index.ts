import type { App, Component } from 'vue'

// 自动全局注册layout组件
export const layout = {
  install(app: App) {
    const layoutComponents = import.meta.glob('./*.vue', {
      eager: true,
      import: 'default'
    })
    for (const path in layoutComponents) {
      const compName = path.match(/\.\/(.*)\.vue$/)![1]
      const comp = layoutComponents[path]
      app.component(compName, comp as Component)
    }
  }
}
