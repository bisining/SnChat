<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SnDialog from '@/components/feedback/SnDialog.vue'
</script>

<template>
  <SnContainer>
    <button>打开</button>
  </SnContainer>
  <SnDialog>
    <div>
      <p>这是一个对话框</p>
    </div>
  </SnDialog>
</template>

<style></style>
