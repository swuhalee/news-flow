<script setup lang="ts">
import { ref } from 'vue'
import NewsSearch from './components/NewsSearch.vue';
import FilterGroup from './components/FilterGroup.vue';
import NewsGrid from './components/NewsGrid.vue';


const search = ref('')
const activeSources = ref<string[]>([])
</script>

<template>
    <div class="space-y-5">
        <div class="space-y-3">
            <NewsSearch v-model="search" class="w-full sm:w-80" />
            <FilterGroup v-model="activeSources" />
        </div>

        <NewsGrid :search="search" :active-sources="activeSources" @reset-filters="search = '', activeSources = []" />
    </div>
</template>
