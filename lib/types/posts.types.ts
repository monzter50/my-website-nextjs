export interface IAuthor {
  name: string
  picture?: string
}

export interface IReadingTime {
  text: string
  minutes: number
  words: number
}

export interface IPostProps {
  title?: string
  author?: IAuthor
  excerpt?: string
  slug: string
  date: string
  published?: boolean
  locale?: string
  readingTime?: IReadingTime
}
