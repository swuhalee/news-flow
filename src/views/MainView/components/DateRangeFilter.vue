<script setup lang="ts">
import { computed } from 'vue'

export interface DateRange {
  dateFrom: string
  dateTo: string
}

interface Preset {
  label: string
  days: number
}

const presets: Preset[] = [
  { label: '오늘', days: 0 },
  { label: '7일전', days: 7 },
  { label: '30일전', days: 30 },
  { label: '3개월전', days: 90 },
  { label: '6개월전', days: 180 },
  { label: '1년전', days: 365 },
]

const model = defineModel<DateRange>({ required: true })

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}

const activeDays = computed(() => {
  if (!model.value) return null
  const from = new Date(model.value.dateFrom)
  const to = new Date(model.value.dateTo)
  return Math.round((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24))
})

function select(days: number) {
  const to = new Date()
  const from = new Date()
  from.setDate(from.getDate() - days)
  model.value = { dateFrom: formatDate(from), dateTo: formatDate(to) }
}
</script>

<template>
  <div class="flex flex-wrap gap-1.5">
    <button v-for="preset in presets" :key="preset.days"
      class="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200" :class="activeDays === preset.days
        ? 'bg-brand-accent text-white border-brand-accent shadow-sm'
        : 'bg-white text-brand-sub border-brand-border hover:border-brand-accent/40 hover:text-brand-accent'
        " @click="select(preset.days)">
      {{ preset.label }}
    </button>
  </div>
</template>
