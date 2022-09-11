import React from 'react'
import styles from './Container.module.css'

export default function Container({ children }: any): JSX.Element {
  return (
    <div className={styles.containerCard}>
      {children}
    </div>
  )
}
