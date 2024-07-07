/// <reference types="vite/client" />

import type { RouterLink, RouterView } from 'vue-router'

declare module 'vue' {
  interface GlobalComponents { // 不懂为什么要写vue-router的类型声明 明明vue-router已经写了编辑器不认 有可能是vue插件的问题
    RouterView: RouterView
    RouterLink: RouterLink
  }
}

export {}
