<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/types/news'
import { useNewsAPIEverything } from '@/hooks/useNewsAPIEverything'
import { fromNewsAPI } from '@/mappers/news'
import NewsCard from './NewsCard.vue'
import type { NewsAPIEverythingParams } from '@/models/newsapi'

const props = withDefaults(
    defineProps<{
        search?: string
        activeSources?: string[]
    }>(),
    {
        search: '',
        activeSources: () => [],
    },
)

const queryParams = computed<NewsAPIEverythingParams>(() => {
    const query = props.search.trim()

    return {
        q: query || 'latest', // q는 필수라서 빈 값 대신 기본값 권장
        sortBy: 'publishedAt',
        sources: props.activeSources.length > 0 ? props.activeSources.join(',') : undefined,
        language: 'en'
    }
})

const { data, isLoading } = useNewsAPIEverything(queryParams)

const articles = computed<Article[]>(() => {
    return data.value?.articles?.map(fromNewsAPI) ?? []
})
</script>

<template>
    <div class="relative w-full">
        <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            <div v-for="i in 8" :key="i"
                class="bg-brand-card border border-brand-border rounded-2xl overflow-hidden animate-pulse">
                <div class="aspect-video bg-slate-200" />
                <div class="p-5 space-y-3">
                    <div class="flex gap-2">
                        <div class="h-4 w-16 bg-slate-200 rounded-full" />
                        <div class="h-4 w-12 bg-slate-200 rounded-full" />
                    </div>
                    <div class="h-5 w-full bg-slate-200 rounded" />
                    <div class="h-5 w-5/6 bg-slate-200 rounded" />
                    <div class="pt-2 h-4 w-1/2 bg-slate-200 rounded" />
                </div>
            </div>
        </div>

        <template v-else>
            <div v-if="articles.length > 0"
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                <NewsCard v-for="article in articles" :key="article.url" :news="article"
                    @toggle-save="(a) => console.log('저장 기능 구현 예정:', a.title)" />
            </div>

            <div v-else class="flex flex-col items-center justify-center py-24 text-center">
                <h3 class="text-lg font-medium text-brand-text mb-1">결과를 찾을 수 없습니다.</h3>
                <p class="text-brand-sub">
                    {{ props.search ? `"${props.search}"에 대한 검색 결과가 없습니다.` : '선택한 조건에 맞는 기사가 없습니다.' }}
                </p>
                <button v-if="props.search || props.activeSources.length" @click="$emit('reset-filters')"
                    class="mt-4 text-sm text-brand-accent underline underline-offset-4">
                    필터 초기화
                </button>
            </div>
        </template>
    </div>
</template>
