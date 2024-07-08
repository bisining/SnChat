<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)

const zIndex = ref(1000)
defineExpose({
  closeDialog() {
    isOpen.value = false
  },
})
</script>

<template>
  <Teleport to="body">
    <div :style="{ zIndex }">
      <!-- dialog遮罩层 -->
      <div v-show="isOpen" class="sn-dialog-mask">
        <div v-show="isOpen" class="sn-dialog">
          <slot name="header"></slot>
          <slot></slot>
          <slot name="footer">
            <button @click="() => (isOpen = false)">关闭</button>
          </slot>
        </div>
      </div>
    </div>
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

.sn-dialog-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
}
</style>
