// 可以改成自动生成类型声明文件 不然每个都得自己导
import SnContainer from './layout/SnContainer.vue'

// declare module:扩展已有模块类型
// 不知道为什么一定是 declare module 'vue'. declare module '@vue/runtime-core' 这样写就没用
declare module 'vue' {
  interface GlobalComponents {
    SnContainer: typeof SnContainer
  }
}
// 一定要export任意内容 让编辑器知道 具体原理不明
export {}
