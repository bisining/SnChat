<script setup lang="ts">
defineOptions({
  name: 'SnHeader',
})

interface SnHeaderProps {
  height?: string
}
const props = withDefaults(defineProps<SnHeaderProps>(), {
  height: '60px',
})

</script>

<template>
  <header class="sn-header">
    <slot />
  </header>
</template>

<style>
.sn-header {
  display: flex;
  height: v-bind('$props.height');
}
</style>
