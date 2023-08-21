import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logotipo } from '../../Icons'
import { useRouter } from 'next/router'
import Wrapper from '../../Surfaces/Wrapper/index'
import useTranslation from 'next-translate/useTranslation'
export default function Navbar(): JSX.Element {
  const router = useRouter()
  const { t } = useTranslation()

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
          <div className='flex'>
          <a href="#home" title="Home" className="mx-3 text-white hover:text-blue-500 dark:hover:text-gray-400 transition ease-in-out duration-200">{t('common:nav.home')}</a>

          <a href="#aboutme" title="About me" className="mx-3 text-white hover:text-blue-500 dark:hover:text-gray-400 transition ease-in-out duration-200">{t('common:nav.aboutme')}</a>

          <a href="#skills" title="Skills" className="mx-3 text-white hover:text-blue-500 dark:hover:text-gray-400 transition ease-in-out duration-200">{t('common:nav.skills')}</a>

          <a href="#blog" title="Blog" className="mx-3 text-white hover:text-blue-500 dark:hover:text-gray-400 transition ease-in-out duration-200">{t('common:nav.blog')}</a>

            <a href="#project" title="Project" className="mx-3 text-white hover:text-blue-500 dark:hover:text-gray-400 transition ease-in-out duration-200">{t('common:nav.project')}</a>
            <button onClick={handleLanguageChange} className="flex items-center" role='switch'>
              {locale === 'en-US' ? 'EN' : 'ES'}
              <FontAwesomeIcon
                className={styles.icon}
                icon={['fas', 'chevron-down']}
                size="xs"
              />
            </button>
          </div>

        </div>

      </Wrapper>

    </nav>
  )
}
