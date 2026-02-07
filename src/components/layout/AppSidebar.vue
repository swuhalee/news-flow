<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { LayoutDashboard, TrendingUp, Bookmark, X } from 'lucide-vue-next'
import logo from '@/assets/logo.svg'

defineEmits<{
  close: []
}>()

const route = useRoute()

const navItems = [
  { name: 'Dashboard', to: '/', icon: LayoutDashboard },
  { name: 'Insights', to: '/insight', icon: TrendingUp },
  { name: 'Saved', to: '/saved', icon: Bookmark },
] as const
</script>

<template>
  <aside class="flex h-full flex-col bg-white border-r border-brand-border">
    <div class="flex h-16 items-center justify-between px-6 border-b border-brand-border">
      <RouterLink to="/" class="flex items-center gap-2.5">
        <img :src="logo" alt="NewsFlow" class="size-7" />
        <span class="text-lg font-bold tracking-tight text-brand-text">NewsFlow</span>
      </RouterLink>
      <button class="lg:hidden text-brand-sub hover:text-brand-text" @click="$emit('close')">
        <X class="size-5" />
      </button>
    </div>

    <nav class="flex-1 px-3 py-4 space-y-1">
      <RouterLink v-for="item in navItems" :key="item.to" :to="item.to"
        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors" :class="route.path === item.to
          ? 'bg-brand-accent/10 text-brand-accent'
          : 'text-brand-sub hover:bg-slate-100 hover:text-brand-text'
          " @click="$emit('close')">
        <component :is="item.icon" class="size-5" :stroke-width="1.8" />
        {{ item.name }}
      </RouterLink>
    </nav>

    <!-- 나중에 header로 위치 바뀔 수도 있음 -->
    <div class="border-t border-brand-border px-4 py-4">
      <div class="flex items-center gap-3">
        <div class="size-9 rounded-full bg-brand-accent/10 flex items-center justify-center">
          <span class="text-sm font-semibold text-brand-accent">U</span>
        </div>
        <div class="min-w-0">
          <p class="truncate text-sm font-medium text-brand-text">User</p>
          <p class="truncate text-xs text-brand-sub">user@email.com</p>
        </div>
      </div>
    </div>
  </aside>
</template>
