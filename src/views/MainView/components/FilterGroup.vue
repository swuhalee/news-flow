<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { useNewsAPISources } from '@/hooks/useNewsAPISources'

const { data, isLoading } = useNewsAPISources()

const model = defineModel<string[]>({ default: () => [] })
const expanded = ref(false)

function toggle(sourceId: string) {
    const current = model.value
    if (current.includes(sourceId)) {
        model.value = current.filter((s) => s !== sourceId)
    } else {
        model.value = [...current, sourceId]
    }
}

function isActive(sourceId: string) {
    return model.value.length === 0 || model.value.includes(sourceId)
}
</script>

<template>
    <div class="space-y-2">
        <button @click="expanded = !expanded"
            class="flex items-center gap-1.5 text-xs font-medium text-brand-sub hover:text-brand-text transition-colors">
            <span>소스 필터</span>
            <span v-if="model.length > 0"
                class="bg-brand-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                {{ model.length }}
            </span>
            <ChevronDown class="size-3.5 transition-transform duration-200" :class="{ 'rotate-180': expanded }" />
        </button>

        <div class="flex flex-wrap gap-2 overflow-hidden transition-all duration-300"
            :class="expanded ? 'max-h-[1000px]' : 'max-h-8'"> <template v-if="isLoading">
                <div v-for="i in 4" :key="i" class="h-8 w-20 bg-slate-200 rounded-full animate-pulse" />
            </template>

            <template v-else>
                <button v-for="source in data?.sources" :key="source.id"
                    class="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200" :class="isActive(source.id)
                        ? 'bg-brand-accent text-white border-brand-accent shadow-sm'
                        : 'bg-white text-brand-sub border-brand-border hover:border-brand-accent/40 hover:text-brand-accent'
                        " @click="toggle(source.id)">
                    {{ source.name }}
                </button>
            </template>
        </div>
    </div>
</template>
