<script setup lang="ts">
import { ref } from 'vue'
import AppSidebar from '@/common/layout/AppSidebar.vue'
import AppHeader from '@/common/layout/AppHeader.vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-brand-bg">

    <!-- 모바일에서 사이드바가 열렸을 때 나타나는 반투명 검정 배경 -->
    <Transition name="fade">
      <div v-if="sidebarOpen" class="fixed inset-0 z-40 bg-black/30 lg:hidden" @click="sidebarOpen = false" />
    </Transition>

    <div class="fixed inset-y-0 left-0 z-50 w-65 transition-transform duration-200 lg:translate-x-0"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">
      <AppSidebar @close="sidebarOpen = false" />
    </div>

    <div class="lg:pl-65">
      <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="p-4 sm:p-6 lg:p-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
