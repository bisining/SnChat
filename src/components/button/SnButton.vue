<script setup lang="ts">
const emit = defineEmits(['click'])

function buttonClick(e: MouseEvent) {
  emit('click', e)
}
</script>

<template>
  <button @click="buttonClick" class="sn-button">
    <slot></slot>
  </button>
</template>

<style>
.sn-button{
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: 16px;
}
</style>