<script setup lang="ts">
defineOptions({
  name: 'SnContainer',
})

interface SnContainerProps {
  direction?: 'horizontal' | 'vertical'
}
const props = withDefaults(defineProps<SnContainerProps>(), {
  direction: 'horizontal',
})

// 当子组件中有 header 或者 footer 时，子元素会上下垂直排列
import { computed, useSlots, type Component, type VNode } from 'vue'
const slots = useSlots()

const isVertical = computed(() => {
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default()
    return vNodes.some(vNode => {
      const tag = (vNode.type as Component).name
      return tag === 'SnHeader' || tag === 'SnFooter'
    })
  }
  return props.direction === 'vertical'
})
</script>

<template>
  <section class="sn-container" :class="isVertical ? 'is-vertical' : ''">
    <slot />
  </section>
</template>

<style>
.sn-container {
  display: flex;
  flex: 1;
  flex-basis: auto;
}
.is-vertical {
  flex-direction: column;
}
</style>
