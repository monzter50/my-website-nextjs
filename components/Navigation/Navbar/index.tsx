import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logotipo } from '../../Icons'
import { useRouter } from 'next/router'
import Wrapper from '../../Surfaces/Wrapper/index'
import useTranslation from 'next-translate/useTranslation'
import Hamburger from '@components/Icons/Hamburger'
export default function Navbar({ isHome }: {isHome: boolean}): JSX.Element {
  const router = useRouter()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

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
    <nav className='fixed top-0 w-full z-40 p-2 text-white flex items-center bg-blur'>
      <Wrapper>
        <div className='flex items-center w-full justify-between flex-wrap md:flex-nowrap'>

          <Link href='/' >
            <a>
              <Logotipo height={100} width={200} />
            </a>

          </Link>
          {
            isHome && (
              <>
                {/* Hamburger Menu */}
                <Hamburger onClick={() => setIsOpen(!isOpen)} size={50} className="cursor-pointer md:hidden block" />

                {/* Navigation Links */}
                <div className={` w-full md:flex md:items-center md:w-auto ${isOpen ? 'flex' : 'hidden'}`}>
                  <ul className={'md:flex md:justify-between flex-1 '}>
                    <li className='px-4 py-2 my-2 sm:my-0'>
                      <a href="#home" title="Home" className=" text-white hover:text-blue-ligth  rounded transition duration-300 ease-in-out block">{t('common:nav.home')}</a>
                    </li>
                    <li className='px-4 py-2 my-2 sm:my-0'>
                      <a href="#aboutme" title="About me" className="text-white hover:text-blue-ligth  rounded transition duration-300 ease-in-out block">{t('common:nav.aboutme')}</a>
                    </li>
                    <li className='px-4 py-2 my-2 sm:my-0'>
                      <a href="#skills" title="Skills" className="text-white hover:text-blue-ligth  rounded transition duration-300 ease-in-out block">{t('common:nav.skills')}</a>
                    </li>
                    <li className='px-4 py-2 my-2 sm:my-0'>
                      <a href="#experiences" title="Experiences" className="text-white hover:text-blue-ligth  rounded transition duration-300 ease-in-out block">{t('common:nav.experiences')}</a>
                    </li>
                    <li className='px-4 py-2 my-2 sm:my-0'>
                      <a href="#blog" title="Blog" className="text-white hover:text-blue-ligth  rounded transition duration-300 ease-in-out block">{t('common:nav.blog')}</a>
                    </li>
                    <li className='px-4 py-2 my-2 sm:my-0'>
                      <a href="#project" title="Project" className="text-white hover:text-blue-ligth  rounded transition duration-300 ease-in-out block">{t('common:nav.project')}</a>
                    </li>

                    <button onClick={handleLanguageChange} className="flex items-center px-4 py-2 my-2 sm:my-0  rounded transition duration-300 ease-in-out" role='list-item'>
                      {locale === 'en-US' ? 'EN' : 'ES'}
                      <FontAwesomeIcon
                        className='block mx-1 h-4'
                        icon={['fas', 'chevron-down']}
                        size="xs"
                      />
                    </button>
                  </ul>
                </div>
              </>
            )
          }

        </div>
      </Wrapper>
    </nav>

  )
}
