/// <reference types="vite/client" />
import SnContainer from '@components/layout/SnContainer.vue'
import type { RouterLink, RouterView } from 'vue-router'

// 为全局组件标注类型
// https://cn.vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SnContainer: typeof SnContainer
    RouterView: typeof RouterView
    RouterLink: typeof RouterLink
  }
}
