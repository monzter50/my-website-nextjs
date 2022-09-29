import React from 'react'
import styles from './Wrapper.module.css'

export default function Wrapper({ children }: any): JSX.Element {
  return (
    <section className={styles.Wrapper}>
      {children}
    </section>
  )
}
