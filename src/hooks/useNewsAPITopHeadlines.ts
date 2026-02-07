import { useQuery } from '@tanstack/vue-query'
import { getTopHeadlines } from '@/apis/newsapi'
import type { NewsAPITopHeadlinesParams } from '@/models/newsapi'
import type { MaybeRef } from 'vue'
import { computed, toValue } from 'vue'

export function useNewsAPITopHeadlines(params?: MaybeRef<NewsAPITopHeadlinesParams>) {
  return useQuery({
    queryKey: computed(() => ['topHeadlines', toValue(params)] as const),
    queryFn: () => getTopHeadlines(toValue(params)).then((res) => res.data),
  })
}
