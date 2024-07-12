<script setup lang="ts">
defineOptions({
  name: 'SnAside',
})

interface SnContainerProps {
  width: string
}
const porps = withDefaults(defineProps<SnContainerProps>(), {
  width: '150px',
})
</script>

<template>
  <aside
    :style="{
      width: porps.width,
    }"
    class="sn-aside"
  >
    <slot />
  </aside>
</template>

<style></style>
