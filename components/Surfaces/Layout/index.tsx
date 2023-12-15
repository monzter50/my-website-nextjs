import React, { ReactNode } from 'react'
import styles from './Layout.module.css'
import Navbar from '../../Navigation/Navbar'
import Footer from '../../Navigation/Footer'

interface LayoutProps {
  children: ReactNode
  isHome?: boolean
}
export default function Layout(props: LayoutProps): JSX.Element {
  const { children, isHome = false } = props
  return (
    <main className={styles.main}>
      <Navbar isHome={isHome} />
      {children}
      <Footer />
    </main>
  )
}
