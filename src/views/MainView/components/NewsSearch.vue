<script setup lang="ts">
import { ref, watch } from 'vue'
import { Search, X } from 'lucide-vue-next'

const model = defineModel<string>({ default: '' })

const tempValue = ref(model.value)

watch(model, (newVal) => {
    tempValue.value = newVal
})

function handleSearch() {
    model.value = tempValue.value
}

function clear() {
    tempValue.value = ''
    model.value = ''
}
</script>

<template>
    <div class="relative">
        <button @click="handleSearch"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-brand-sub hover:text-brand-accent transition-colors">
            <Search class="size-4" :stroke-width="1.8" />
        </button>

        <input v-model="tempValue" type="text" placeholder="뉴스 검색" class="w-full rounded-xl border border-brand-border bg-white pl-10 pr-9 py-2.5 text-sm text-brand-text
                 outline-none placeholder:text-brand-sub
                 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all"
            @keydown.enter="handleSearch" />

        <button v-if="tempValue"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-brand-sub hover:text-brand-text transition-colors"
            @click="clear">
            <X class="size-4" />
        </button>
    </div>
</template>