import type { Article } from '@/types/news'
import type { NewsAPIArticle } from '@/models/newsapi'
import type { GuardianArticle } from '@/models/guardian'
import type { NYTimesArticle, NYTimesTopStoriesArticle } from '@/models/nytimes'

export function fromNewsAPI(article: NewsAPIArticle): Article {
  return {
    source: article.source.name,
    title: article.title,
    url: article.url,
    publishedAt: article.publishedAt,
    description: article.description,
    imageUrl: article.urlToImage,
    author: article.author,
    section: null,
  }
}

export function fromGuardian(article: GuardianArticle): Article {
  return {
    source: 'guardian', // TODO: 이름 바꿔야함
    title: article.webTitle,
    url: article.webUrl,
    publishedAt: article.webPublicationDate,
    description: null,
    imageUrl: null,
    author: null,
    section: article.sectionName,
  }
}

export function fromNYTimesSearch(article: NYTimesArticle): Article {
  return {
    source: 'nytimes',
    title: article.headline.main,
    url: article.web_url,
    publishedAt: article.pub_date,
    description: article.snippet,
    imageUrl: article.multimedia[0]?.url ?? null,
    author: article.byline.original ?? null,
    section: article.section_name ?? null,
  }
}

export function fromNYTimesTopStories(article: NYTimesTopStoriesArticle): Article {
  return {
    source: 'nytimes',
    title: article.title,
    url: article.url,
    publishedAt: article.published_date,
    description: article.abstract,
    imageUrl: article.multimedia[0]?.url ?? null,
    author: article.byline,
    section: article.section,
  }
}
