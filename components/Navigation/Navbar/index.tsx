import React from 'react'
import styles from "./Navbar.module.css";
import Link from 'next/link';
import { Logotipo } from '@components/Icons';
export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className="book-info">
        <Link href={`/`}>
          <a className="hover:underline">
            <Logotipo height={80} width={'100%'} />
          </a>
        </Link>
      </div>
      {/* <ul className={styles.navCollapse}>
        <li className={styles.navItem}>Blog</li>
        <li className={styles.navItem}>Blog</li>
        <li className={styles.navItem}>Blog</li>
      </ul> */}
    </nav>
  )
}
