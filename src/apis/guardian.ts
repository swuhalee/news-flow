import axios from 'axios'
import type { GuardianSearchParams, GuardianSearchResponse } from '@/models/guardian'

const guardianApi = axios.create({
  baseURL: 'https://content.guardianapis.com',
  params: {
    'api-key': import.meta.env.VITE_GUARDIAN_NEWS_API_KEY,
  },
})

export function searchGuardian(params: GuardianSearchParams = {}) {
  return guardianApi.get<GuardianSearchResponse>('/search', {
    params,
  })
}
