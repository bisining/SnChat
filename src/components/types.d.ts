// 可以改成自动生成类型声明文件 不然每个都得自己导
import SnButton from './button/SnButton.vue'
import SnContainer from './container/SnContainer.vue'
import SnHeader from './container/SnHeader.vue'
import SnAside from './container/SnAside.vue'
import SnMain from './container/SnMain.vue'

// declare module:扩展已有模块类型
// 不知道为什么一定是 declare module 'vue'. declare module '@vue/runtime-core' 这样写就没用
declare module 'vue' {
  interface GlobalComponents {
    SnContainer: typeof SnContainer
    SnHeader: typeof SnHeader
    SnMain: typeof SnMain
    SnAside: typeof SnAside
    SnButton: typeof SnButton
  }
}
// 一定要export任意内容 让编辑器知道 具体原理不明
export {}
