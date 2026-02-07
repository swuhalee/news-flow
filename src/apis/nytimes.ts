import axios from 'axios'
import type {
  NYTimesSearchParams,
  NYTimesSearchResponse,
  NYTimesTopStoriesSection,
  NYTimesTopStoriesResponse,
} from '@/models/nytimes'

const nytimesApi = axios.create({
  baseURL: 'https://api.nytimes.com/svc',
  params: {
    'api-key': import.meta.env.VITE_NYTIMES_API_KEY,
  },
})

export function searchNYTimes(params: NYTimesSearchParams = {}) {
  return nytimesApi.get<NYTimesSearchResponse>('/search/v2/articlesearch.json', {
    params,
  })
}

export function getNYTimesTopStories(section: NYTimesTopStoriesSection = 'home') {
  return nytimesApi.get<NYTimesTopStoriesResponse>(`/topstories/v2/${section}.json`)
}
