import axios from 'axios'
import type { NewsAPITopHeadlinesParams, NewsAPITopHeadlinesResponse, NewsAPIEverythingParams, NewsAPISourcesParams, NewsAPISourcesResponse } from '@/models/newsapi'

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
  },
})

export function getTopHeadlines(params: NewsAPITopHeadlinesParams = {}) {
  return newsApi.get<NewsAPITopHeadlinesResponse>('/top-headlines', {
    params: {
      country: 'us',
      ...params,
    },
  })
}

export function getEverything(params: NewsAPIEverythingParams) {
  return newsApi.get<NewsAPITopHeadlinesResponse>('/everything', {
    params,
  })
}

export function getSources(params: NewsAPISourcesParams = {}) {
  return newsApi.get<NewsAPISourcesResponse>('/top-headlines/sources', {
    params,
  })
}
