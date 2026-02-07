export interface NYTimesMultimedia {
  url: string
  format: string
  height: number
  width: number
  type: string
  subtype: string
  caption: string
  copyright: string
}

export interface NYTimesHeadline {
  main: string
  kicker?: string
  content_kicker?: string
  print_headline?: string
  name?: string
  seo?: string
  sub?: string
}

export interface NYTimesByline {
  original?: string
  person?: { firstname?: string; middlename?: string; lastname?: string }[]
  organization?: string
}

export interface NYTimesKeyword {
  name: string
  value: string
  rank: number
  major: string
}

export interface NYTimesArticle {
  web_url: string
  snippet: string
  print_page?: string
  print_section?: string
  source?: string
  multimedia: NYTimesMultimedia[]
  headline: NYTimesHeadline
  keywords: NYTimesKeyword[]
  pub_date: string
  document_type: string
  news_desk?: string
  section_name?: string
  subsection_name?: string
  byline: NYTimesByline
  type_of_material?: string
  _id: string
  word_count?: number
  uri: string
}

export interface NYTimesSearchParams {
  q?: string
  fq?: string
  begin_date?: string
  end_date?: string
  sort?: 'newest' | 'oldest' | 'relevance'
  page?: number
}

export interface NYTimesSearchResponse {
  status: string
  copyright: string
  response: {
    docs: NYTimesArticle[]
    meta: {
      hits: number
      offset: number
      time: number
    }
  }
}

export type NYTimesTopStoriesSection =
  | 'arts'
  | 'automobiles'
  | 'books/review'
  | 'business'
  | 'fashion'
  | 'food'
  | 'health'
  | 'home'
  | 'insider'
  | 'magazine'
  | 'movies'
  | 'nyregion'
  | 'obituaries'
  | 'opinion'
  | 'politics'
  | 'realestate'
  | 'science'
  | 'sports'
  | 'sundayreview'
  | 'technology'
  | 'theater'
  | 't-magazine'
  | 'travel'
  | 'upshot'
  | 'us'
  | 'world'

export interface NYTimesTopStoriesMultimedia {
  url: string
  format: string
  height: number
  width: number
  type: string
  subtype: string
  caption: string
  copyright: string
}

export interface NYTimesTopStoriesArticle {
  section: string
  subsection: string
  title: string
  abstract: string
  url: string
  uri: string
  byline: string
  item_type: string
  updated_date: string
  created_date: string
  published_date: string
  material_type_facet: string
  kicker: string
  des_facet: string[]
  org_facet: string[]
  per_facet: string[]
  geo_facet: string[]
  multimedia: NYTimesTopStoriesMultimedia[]
  short_url: string
}

export interface NYTimesTopStoriesResponse {
  status: string
  copyright: string
  section: string
  last_updated: string
  num_results: number
  results: NYTimesTopStoriesArticle[]
}
