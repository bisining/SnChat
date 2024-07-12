<script setup lang="ts">
import { ref, watch } from 'vue'
interface DialogProps {
  // 标题
  title?: string
  // 是否可以通过点击 mask 关闭 Dialog
  closeOnClickModal?: boolean
}

const props = withDefaults(defineProps<DialogProps>(), {
  title: '',
  closeOnClickModal: true,
})

const isOpen = defineModel<boolean>()

function closeDialog() {
  isOpen.value = false
}

// 防止mouseDown了dialog内部后,在mask区域mouseUp意外关闭弹窗
let MouseDowned = true
function clickMask({ target }: MouseEvent) {
  if (!props.closeOnClickModal) return

  if ((target as HTMLElement).className === 'sn-dialog-mask' && MouseDowned) {
    closeDialog()
  }
}
function dialogMouseDown({ target }: MouseEvent) {
  if ((target as HTMLElement).className === 'sn-dialog-mask') {
    MouseDowned = true
  } else {
    MouseDowned = false
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="sn-dialog-mask">
      <!-- dialog遮罩层 -->
      <div
        @mousedown="dialogMouseDown"
        @click="clickMask"
        class="sn-dialog-mask"
        v-show="isOpen"
      >
        <!-- dialog本体 -->
        <div class="sn-dialog">
          <header class="sn-dialog__header">
            <slot name="header"> </slot>
          </header>
          <main class="sn-dialog__main">
            <slot> </slot>
          </main>
          <footer class="sn-dialog__footer">
            <slot name="footer">
              <sn-button @click="closeDialog">关闭</sn-button>
            </slot>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
/* Dialog主题样式 */
.sn-dialog {
  /* 宽高由内容撑开 */
  width: fit-content;
  height: fit-content;
  /* 边距相关 */
  padding: 10px;
  /* 固定定位 & 居中 */
  position: fixed;
  inset: 0;
  margin: auto;
  /* 边框 & 阴影 */
  border-radius: 3px;
  box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.sn-dialog__header {
  border-bottom: 1px solid #eee;
}

.sn-dialog__main {
  padding: 10px 0;
}

.sn-dialog__footer {
  border-top: 1px solid #eee;
  text-align: right;
}

.sn-dialog-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  transition: all 0.2s ease;
}
/* 遮罩层过渡动画 */
.sn-dialog-mask-enter-from,
.sn-dialog-mask-leave-to {
  opacity: 0;
}
.sn-dialog-mask-enter-active,
.sn-dialog-mask-leave-active {
  transition: all 0.2s ease;
}
/* dialog过渡动画 */
.sn-dialog-mask-enter-from .sn-dialog {
  opacity: 0;
  transform: scale(1.2);
}
.sn-dialog-mask-leave-to .sn-dialog {
  opacity: 0;
  transform: scale(0.8);
}
.sn-dialog-mask-enter-active .sn-dialog,
.sn-dialog-mask-leave-active .sn-dialog {
  transition: all 0.2s ease;
}
</style>
