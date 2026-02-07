export interface NewsAPIArticle {
  source: { id: string | null; name: string }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

export interface NewsAPITopHeadlinesParams {
  country?: string
  category?: 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology'
  sources?: string
  q?: string
  pageSize?: number
  page?: number
}

export interface NewsAPITopHeadlinesResponse {
  status: string
  totalResults: number
  articles: NewsAPIArticle[]
}

export interface NewsAPISource {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}

export interface NewsAPISourcesParams {
  category?: 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology'
  language?: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh'
  country?: 'ae' | 'ar' | 'at' | 'au' | 'be' | 'bg' | 'br' | 'ca' | 'ch' | 'cn' | 'co' | 'cu' | 'cz' | 'de' | 'eg' | 'fr' | 'gb' | 'gr' | 'hk' | 'hu' | 'id' | 'ie' | 'il' | 'in' | 'it' | 'jp' | 'kr' | 'lt' | 'lv' | 'ma' | 'mx' | 'my' | 'ng' | 'nl' | 'no' | 'nz' | 'ph' | 'pl' | 'pt' | 'ro' | 'rs' | 'ru' | 'sa' | 'se' | 'sg' | 'si' | 'sk' | 'th' | 'tr' | 'tw' | 'ua' | 'us' | 've' | 'za'
}

export interface NewsAPISourcesResponse {
  status: string
  sources: NewsAPISource[]
}

export interface NewsAPIEverythingParams {
  q: string
  searchIn?: string
  sources?: string
  domains?: string
  excludeDomains?: string
  from?: string
  to?: string
  language?: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh'
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt'
  pageSize?: number
  page?: number
}
