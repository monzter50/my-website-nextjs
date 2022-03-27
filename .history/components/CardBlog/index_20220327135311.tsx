import React from 'react'
import styles from "./CardBlog.module.css";
import Link from 'next/link'
export default function CardBlog ({title,author,excerpt,slug}) {
  return (

    <div className={styles.newPost}>
    <Link href={`/posts/${slug}`}>
    <a className="hover:underline">
      <article className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.preview}>{excerpt}</p>
        <p>{author.name}</p>
      </article>
      </a>
      </Link>
    </div>
      
  )
}
