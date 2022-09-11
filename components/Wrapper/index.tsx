import React from 'react'
import styles from './Wrapper.module.css'

export default function Wrapper({ children }: any): JSX.Element {
  return (
    <div className={styles.Wrapper}>
      {children}
    </div>
  )
}
