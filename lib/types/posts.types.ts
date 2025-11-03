export interface IPostProps {
  title?: string
  author?: any
  excerpt?: string
  slug: string
  date: string
  coverImage?: string
  readingTime?: {
    text: string
    minutes: number
    words: number
  }
  tags?: string[]
}
