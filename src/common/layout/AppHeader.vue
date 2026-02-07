<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Search, Bell, Menu } from 'lucide-vue-next'

defineEmits<{
  toggleSidebar: []
}>()

const route = useRoute()

const pageTitles: Record<string, string> = {
  main: '대시보드',
  insight: '분석 리포트',
  detail: '뉴스 상세',
  saved: '북마크',
}
</script>

<template>
  <header
    class="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-brand-border bg-white/80 backdrop-blur-sm px-6">
    <!-- 모바일에서 사이드바를 열 수 있는 버튼 -->
    <button class="lg:hidden text-brand-sub hover:text-brand-text" @click="$emit('toggleSidebar')">
      <Menu class="size-5" />
    </button>

    <h1 class="text-lg font-semibold text-brand-text">
      {{ pageTitles[route.name as string] ?? '' }}
    </h1>

    <!-- <div class="flex-1" />

    <div class="hidden sm:flex items-center gap-2 rounded-lg border border-brand-border bg-brand-bg px-3 py-2 w-72">
      <Search class="size-4 text-brand-sub" :stroke-width="1.8" />
      <input type="text" placeholder="뉴스 검색..."
        class="flex-1 bg-transparent text-sm text-brand-text outline-none placeholder:text-brand-sub" />
    </div> -->

    <!-- Notification -->
    <!-- <button class="relative rounded-lg p-2 text-brand-sub hover:bg-slate-100 hover:text-brand-text transition-colors">
      <Bell class="size-5" :stroke-width="1.8" />
      <span class="absolute top-1.5 right-1.5 size-2 rounded-full bg-brand-accent" />
    </button> -->
  </header>
</template>
