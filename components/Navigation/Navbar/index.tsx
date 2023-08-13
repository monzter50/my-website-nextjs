import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logotipo } from '../../Icons'
import { useRouter } from 'next/router'
import Wrapper from '../../Surfaces/Wrapper/index'
export default function Navbar(): JSX.Element {
  const router = useRouter()
  const locale = router?.locale ?? 'es-MX'
  const asPath = router?.asPath ?? '/'
  const handleLanguageChange = (): void => {
    switch (locale) {
      case 'es-MX':
        router.push(asPath, asPath, { locale: 'en-US' })
        break
      case 'en-US':
        router.push(asPath, asPath, { locale: 'es-MX' })
        break
    }
  }
  return (
    <nav className={`${styles.container} p-2`}>
      <Wrapper>
        <div className='flex justify-between items-center'>
        <div className="book-info">
          <Link href={'/'}>
            <a className="hover:underline">
              <Logotipo height={80} width={'100%'} />
            </a>
          </Link>
        </div>

        <button onClick={handleLanguageChange} className="flex items-center" role='switch'>
          {locale === 'en-US' ? 'EN' : 'ES'}
          <FontAwesomeIcon
            className={styles.icon}
            icon={['fas', 'chevron-down']}
            size="xs"
          />
        </button>
        </div>

      </Wrapper>

    </nav>
  )
}
