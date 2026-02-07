import { useInfiniteQuery } from '@tanstack/vue-query'
import { searchDeepSearch } from '@/apis/deepsearch'
import type { DeepSearchParams } from '@/models/deepsearch'
import type { MaybeRef } from 'vue'
import { computed, toValue } from 'vue'

export function useDeepSearchArticles(params?: MaybeRef<Omit<DeepSearchParams, 'page'>>) {
  return useInfiniteQuery({
    queryKey: computed(() => ['deepsearchArticles', toValue(params)] as const),
    queryFn: ({ pageParam }) =>
      searchDeepSearch({ ...toValue(params), page: pageParam }).then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  })
}
