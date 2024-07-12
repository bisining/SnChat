<script setup lang="ts">
import ChatUserList from './ChatUserList.vue'
import ChatHeader from './ChatHeader.vue'
import ChatMessage from './ChatMessage.vue'
</script>

<template>
  <div class="chat-room">
    <SnContainer height="100vh">
      <!-- 左侧好友列表 -->
      <SnAside :width="'200px'">
        <ChatUserList />
      </SnAside>
      <!-- 右侧聊天区域 -->
      <SnContainer>
        <SnHeader>
          <!-- 对话顶栏 -->
          <ChatHeader />
        </SnHeader>
        <SnMain>
          <!-- 对话主体 -->
          <ChatMessage />
        </SnMain>
      </SnContainer>
    </SnContainer>
  </div>
</template>

<style scoped>
@import url(@css/base.css);

.chat-room {
  --chat-room-padding: 10px;
  padding: var(--chat-room-padding);
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.197);

  .sn-container {
    height: calc(100vh - var(--chat-room-padding) * 2);
  }
}
</style>
