import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logotipo } from '@components/Icons'
import { useRouter } from 'next/router';
export default function Navbar(): JSX.Element {
  const router = useRouter();
  const { locale, asPath } = router;

  const handleLanguageChange = () => {
    switch (locale) {
      case "es-MX":
        router.push(asPath, asPath, { locale: "en-US" })
        break;
      case "en-US":
        router.push(asPath, asPath, { locale: "es-MX" })
        break;
    }
  }
  return (
    <nav className={`${styles.container} p-2`}>
      <div className="book-info">
        <Link href={'/'}>
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
      <button onClick={handleLanguageChange} className="flex items-center">
        {locale === "en-US" ? "EN" : "ES"}
        <FontAwesomeIcon
          className={styles.icon}
          icon={['fas', 'chevron-down']}
          size="xs"
        />
      </button>
    </nav>
  )
}
