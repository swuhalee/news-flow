import { useQuery } from '@tanstack/vue-query'
import { getSources } from '@/apis/newsapi'
import type { NewsAPISourcesParams } from '@/models/newsapi'
import type { MaybeRef } from 'vue'
import { computed, toValue } from 'vue'

export function useNewsAPISources(params?: MaybeRef<NewsAPISourcesParams>) {
  return useQuery({
    queryKey: computed(() => ['newsAPISources', toValue(params)] as const),
    queryFn: () => getSources(toValue(params)).then((res) => res.data),
  })
}
