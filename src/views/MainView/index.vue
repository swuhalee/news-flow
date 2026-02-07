<script setup lang="ts">
import { ref } from 'vue'
import NewsSearch from './components/NewsSearch.vue'
import DateRangeFilter from './components/DateRangeFilter.vue'
import NewsGrid from './components/NewsGrid.vue'
import type { DateRange } from './components/DateRangeFilter.vue'

function formatDate(date: Date): string {
    return date.toISOString().slice(0, 10)
}

const now = new Date()
const weekAgo = new Date()
weekAgo.setDate(weekAgo.getDate() - 7)

const search = ref('')
const dateRange = ref<DateRange>({
    dateFrom: formatDate(weekAgo),
    dateTo: formatDate(now),
})
</script>

<template>
    <div class="space-y-5">
        <div class="space-y-3">
            <NewsSearch v-model="search" class="w-full sm:w-80" />
            <DateRangeFilter v-model="dateRange" />
        </div>

        <NewsGrid :search="search" :date-from="dateRange.dateFrom" :date-to="dateRange.dateTo"
            @reset-filters="search = ''" />
    </div>
</template>
