<script setup lang="ts">
import { computed, ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'
import type { Article } from '@/types/news'
import { useDeepSearchArticles } from '@/hooks/useDeepSearchArticles'
import { fromDeepSearch } from '@/mappers/news'
import NewsCard from './NewsCard.vue'
import type { DeepSearchParams } from '@/models/deepsearch'
import { Loader2 } from 'lucide-vue-next'

const props = withDefaults(
    defineProps<{
        search?: string
        dateFrom?: string
        dateTo?: string
    }>(),
    {
        search: '',
        dateFrom: '',
        dateTo: '',
    },
)

const emit = defineEmits<{
    'reset-filters': []
}>()

const queryParams = computed<Omit<DeepSearchParams, 'page'>>(() => {
    const keyword = props.search.trim() || undefined
    return {
        keyword,
        date_from: props.dateFrom || undefined,
        date_to: props.dateTo || undefined,
        page_size: 20,
        order: 'published_at',
    }
})

const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useDeepSearchArticles(queryParams)

const articles = computed<Article[]>(() => {
    return data.value?.pages.flatMap((p) => p.data.map(fromDeepSearch)) ?? []
})

// 무한 스크롤 부분 또는 그 밑 요소
const sentinel = ref<HTMLElement | null>(null)

useInfiniteScroll(
    sentinel,
    () => {
        if (hasNextPage.value && !isFetchingNextPage.value) {
            fetchNextPage()
        }
    },
    {
        distance: 200,
        canLoadMore: () => hasNextPage.value ?? false,
    },
)
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
            <div v-if="articles.length > 0">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                    <NewsCard v-for="article in articles" :key="article.url" :news="article"
                        @toggle-save="(a) => console.log('저장 기능 구현 예정:', a.title)" />
                </div>

                <div ref="sentinel" class="flex justify-center py-8">
                    <div v-if="isFetchingNextPage" class="flex items-center gap-2 text-brand-sub text-sm">
                        <Loader2 class="size-4 animate-spin" />
                        <span>불러오는 중...</span>
                    </div>
                    <span v-else-if="!hasNextPage" class="text-brand-sub text-xs">
                        모든 기사를 불러왔습니다.
                    </span>
                </div>
            </div>

            <div v-else class="flex flex-col items-center justify-center py-24 text-center">
                <h3 class="text-lg font-medium text-brand-text mb-1">결과를 찾을 수 없습니다.</h3>
                <p class="text-brand-sub">
                    {{
                        props.search
                            ? `"${props.search}"에 대한 검색 결과가 없습니다.`
                            : '선택한 조건에 맞는 기사가 없습니다.'
                    }}
                </p>
                <button v-if="props.search" @click="emit('reset-filters')"
                    class="mt-4 text-sm text-brand-accent underline underline-offset-4">
                    필터 초기화
                </button>
            </div>
        </template>
    </div>
</template>
