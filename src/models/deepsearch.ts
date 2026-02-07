export interface DeepSearchParams {
  page?: number
  page_size?: number
  keyword?: string
  company_name?: string
  symbols?: string
  date_from?: string
  date_to?: string
  highlight?: 'plain' | 'unified' | 'unified_non_tags'
  clustering?: boolean
  uniquify?: boolean
  order?: 'score' | 'published_at'
  research_insight?: boolean
}

export interface DeepSearchCompany {
  name: string
  symbol: string | null
  exchange: string | null
}

export interface DeepSearchEntity {
  type: string
  name: string
}

export interface DeepSearchHighlight {
  title: string[]
  content: string[]
}

export interface DeepSearchArticle {
  id: string
  sections: string[]
  title: string
  publisher: string | null
  author: string | null
  summary: string | null
  body: string | null
  score: number | null
  image_url: string | null
  thumbnail_url: string | null
  content_url: string
  published_at: string
  highlight: DeepSearchHighlight | null
  esg: Record<string, unknown> | null
  companies: DeepSearchCompany[]
  entities: DeepSearchEntity[]
  named_entities: Record<string, unknown>[] | null
  sentiment: string | null
}

export interface DeepSearchResponseDetail {
  message: string
  code: string
  ok: boolean
}

export interface DeepSearchResponse {
  detail: DeepSearchResponseDetail
  total_items: number
  total_pages: number
  page: number
  page_size: number
  data: DeepSearchArticle[]
}
