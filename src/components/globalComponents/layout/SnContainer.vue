<script setup lang="ts">
interface SnContainerProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

const props = withDefaults(defineProps<SnContainerProps>(), {
  direction: 'row',
})
</script>

<template>
  <section class="sn-container">
    <slot></slot>
  </section>
</template>

<style>
.sn-container {
  display: flex;
  flex-direction: v-bind('props.direction');
}
</style>
