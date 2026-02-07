import { useQuery } from '@tanstack/vue-query'
import { getNYTimesTopStories } from '@/apis/nytimes'
import type { NYTimesTopStoriesSection } from '@/models/nytimes'
import type { MaybeRef } from 'vue'
import { computed, toValue } from 'vue'

export function useNYTimesTopStories(section?: MaybeRef<NYTimesTopStoriesSection>) {
  return useQuery({
    queryKey: computed(() => ['nytimesTopStories', toValue(section)] as const),
    queryFn: () => getNYTimesTopStories(toValue(section)).then((res) => res.data),
  })
}
