import React from 'react'
import styles from "./Layout.module.css";
import Navbar from "../../components/Navbar"
// import Footer from "../../components/Footer"
export default function Layout (props) {
    const {children} = props
  return (
      <main className={styles.main}>
        <Navbar/>
        {children}
        {/* <Footer/> */}
      </main>
  )
}
