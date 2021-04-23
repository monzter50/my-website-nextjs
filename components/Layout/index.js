import React from 'react'
import styles from "./Layout.module.css";
import Navbar from "../Navbar"
import Footer from "../Footer"
export default function Layout (props) {
    const {children} = props
  return (
      <main className={styles.main}>
        <Navbar/>
        {children}
        <Footer/>
      </main>
  )
}
