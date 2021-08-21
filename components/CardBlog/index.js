import React from 'react'
import styles from "./CardBlog.module.css";

export default function CardBlog ({title,author,excerpt}) {
  return (
    <div className={styles.newPost}>
      <article className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.preview}>{excerpt}</p>
      </article>
    </div>
      
  )
}
