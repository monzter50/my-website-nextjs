import React, { ReactNode } from 'react'
import styles from './Layout.module.css'
import Navbar from '@components/Navigation/Navbar'
import Footer from '@components/Navigation/Footer'
import { Locale } from '@root/i18n-config'

interface LayoutProps {
  children: ReactNode
  locale: Locale
}
export default function Layout(props: LayoutProps): JSX.Element {
  const { children, locale } = props

  return (
    <main className={styles.main}>
      <Navbar locale={locale} />
      {children}
      <Footer />
    </main>
  )
}
