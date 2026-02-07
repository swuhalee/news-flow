export interface GuardianArticle {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  isHosted: boolean
  pillarId?: string
  pillarName?: string
}

export interface GuardianSearchParams {
  q?: string
  'query-fields'?: string
  section?: string
  tag?: string
  'from-date'?: string
  'to-date'?: string
  'order-by'?: 'newest' | 'oldest' | 'relevance'
  page?: number
  'page-size'?: number
  'show-fields'?: string
  'show-tags'?: string
  'show-section'?: string
  'show-blocks'?: string
  'show-elements'?: string
  lang?: string
}

export interface GuardianSearchResponse {
  response: {
    status: string
    userTier: string
    total: number
    startIndex: number
    pageSize: number
    currentPage: number
    pages: number
    orderBy: string
    results: GuardianArticle[]
  }
}
