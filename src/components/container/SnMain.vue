<script setup lang="ts">
defineOptions({
  name: 'SnMain',
})
</script>

<template>
  <main class="sn-main"><slot /></main>
</template>

<style>
.sn-main {
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
}
</style>
