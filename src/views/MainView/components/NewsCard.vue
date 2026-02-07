<script setup lang="ts">
import { ref } from 'vue'
import type { Article } from '@/types/news'

const props = defineProps<{
    news: Article
}>()

const isSaved = ref(false)
const imageError = ref(false)

const emit = defineEmits<{
    'toggle-save': [article: Article]
}>()

function toggleSave() {
    isSaved.value = !isSaved.value
    emit('toggle-save', props.news)
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })
}

function openArticle() {
    window.open(props.news.url, '_blank')
}

const sourceLabel: Record<string, string> = {
    newsapi: 'NewsAPI',
}
</script>

<template>
    <article class="group relative bg-brand-card border border-brand-border rounded-2xl overflow-hidden
           transition-all duration-300 hover:shadow-soft hover:-translate-y-1 cursor-pointer" @click="openArticle">

        <div class="aspect-[16/9] overflow-hidden bg-brand-border/30">
            <img v-if="news.imageUrl && !imageError" :src="news.imageUrl" :alt="news.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                @error="imageError = true" />
            <div v-else class="w-full h-full flex items-center justify-center bg-brand-border/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                    class="text-brand-sub/30">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
            </div>
        </div>

        <div class="p-4 sm:p-5">
            <div class="flex items-center gap-2 mb-2 sm:mb-3">
                <span class="text-xs font-semibold text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full">
                    {{ news.source }}
                </span>
                <span v-if="news.section"
                    class="text-xs font-medium text-brand-secondary bg-brand-secondary/10 px-2 py-0.5 rounded-full">
                    {{ news.section }}
                </span>
            </div>

            <h3
                class="text-base sm:text-lg font-bold text-brand-text leading-snug group-hover:text-brand-accent transition-colors line-clamp-2 mb-2">
                {{ news.title }}
            </h3>
            <p v-if="news.description" class="text-brand-sub text-sm leading-relaxed line-clamp-2 mb-3 sm:mb-4">
                {{ news.description }}
            </p>

            <div class="flex items-center justify-between pt-3 border-t border-brand-border">
                <div class="flex items-center gap-2 text-xs text-brand-sub min-w-0">
                    <span v-if="news.author" class="truncate max-w-[120px]">{{ news.author }}</span>
                    <span v-if="news.author && news.publishedAt" class="text-brand-border">|</span>
                    <time v-if="news.publishedAt">{{ formatDate(news.publishedAt) }}</time>
                </div>

                <button @click.stop="toggleSave" class="shrink-0 transition-transform active:scale-90"
                    :class="isSaved ? 'text-brand-accent' : 'text-brand-sub/40 hover:text-brand-accent'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        :fill="isSaved ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    </svg>
                </button>
            </div>
        </div>
    </article>
</template>
