import React from 'react'
import styles from './CardBlog.module.css'
import NextLink from 'next/link'
import Heading from '@components/Typhografy/Heading'
import Text from '@components/Typhografy/Text'
interface CardBlogProps {
  title: string
  author: any
  excerpt: any
  slug: string
}
export default function CardBlog({ title, author, excerpt, slug }: CardBlogProps): JSX.Element {
  return (

    <div className={styles.newPost}>
      <NextLink href={`/posts/${slug}`}>
        <a className="hover:underline">
          <article className={styles.card}>
            <Heading as='h3' className={styles.title}>{title}</Heading>
            <Text className={styles.preview}>{excerpt}</Text>
            <Text>{author.name}</Text>
          </article>
        </a>
      </NextLink>
    </div>

  )
}
