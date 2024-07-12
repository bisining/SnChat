<script setup lang="ts">
import ChatMessageItem from './ChatMessageItem.vue'
</script>

<template>
  <div class="message-list">
    <ChatMessageItem />
  </div>
</template>

<style scoped>
.message-list {
  background-color: rgba(0, 0, 0, 0.18);
}
</style>
