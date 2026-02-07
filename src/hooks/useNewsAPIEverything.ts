import { useQuery } from '@tanstack/vue-query'
import { getEverything } from '@/apis/newsapi'
import type { NewsAPIEverythingParams } from '@/models/newsapi'
import type { MaybeRef } from 'vue'
import { computed, toValue } from 'vue'

export function useNewsAPIEverything(params: MaybeRef<NewsAPIEverythingParams>) {
  return useQuery({
    queryKey: computed(() => ['everything', toValue(params)] as const),
    queryFn: () => getEverything(toValue(params)).then((res) => res.data),
  })
}
