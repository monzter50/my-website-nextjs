import React from 'react'
import styles from "./Navbar.module.css";

export default function Navbar () {
  return (
      <nav className={styles.container}>
        <div className="book-info">
          <p className="title">Monster Codes</p>
        </div>
        {/* <ul className={styles.navCollapse}>
            <li className={styles.navItem}>Blog</li>
            <li className={styles.navItem}>Blog</li>
            <li className={styles.navItem}>Blog</li>
        </ul> */}
      </nav>
  )
}
