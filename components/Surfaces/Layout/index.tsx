import React from 'react'
import styles from './Layout.module.css'
import Navbar from '../../Navigation/Navbar'
import Footer from '../../Navigation/Footer'
export default function Layout(props: any): JSX.Element {
  const { children } = props
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
