import { useQuery } from '@tanstack/vue-query'
import { searchNYTimes } from '@/apis/nytimes'
import type { NYTimesSearchParams } from '@/models/nytimes'
import type { MaybeRef } from 'vue'
import { computed, toValue } from 'vue'

export function useNYTimesSearch(params?: MaybeRef<NYTimesSearchParams>) {
  return useQuery({
    queryKey: computed(() => ['nytimesSearch', toValue(params)] as const),
    queryFn: () => searchNYTimes(toValue(params)).then((res) => res.data),
  })
}
