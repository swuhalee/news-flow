import { useQuery } from '@tanstack/vue-query'
import { searchGuardian } from '@/apis/guardian'
import type { GuardianSearchParams } from '@/models/guardian'
import type { MaybeRef } from 'vue'
import { computed, toValue } from 'vue'

export function useGuardianSearch(params?: MaybeRef<GuardianSearchParams>) {
  return useQuery({
    queryKey: computed(() => ['guardianSearch', toValue(params)] as const),
    queryFn: () => searchGuardian(toValue(params)).then((res) => res.data),
  })
}
