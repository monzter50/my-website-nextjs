import React from 'react'
import styles from './CardBlog.module.css'
import NextLink from 'next/link'
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
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.preview}>{excerpt}</p>
            <p>{author.name}</p>
          </article>
        </a>
      </NextLink>
    </div>

  )
}
