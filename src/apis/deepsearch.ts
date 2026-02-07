import axios from 'axios'
import type { DeepSearchParams, DeepSearchResponse } from '@/models/deepsearch'

const deepsearchApi = axios.create({
  baseURL: '/api/deepsearch/v1',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DEEPSEARCH_API_KEY}`,
  },
})

export function searchDeepSearch(params: DeepSearchParams = {}) {
  return deepsearchApi.get<DeepSearchResponse>('/articles', {
    params,
  })
}
