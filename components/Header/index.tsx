/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Wrapper from '../Surfaces/Wrapper'
import Heading from '../Typhografy/Heading'
import Text from '../Typhografy/Text'
import Tooltip from '../dataDisplay/Tooltip'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { faCodepen, faFile, faGithub, faInstagram, faLinkedin, faTwitter } from './Header.types'
export default function Header(): JSX.Element {
  const { t } = useTranslation()
  return (
    <section data-testid="HeaderTest" className={'relative pt-[8rem] pb-[3rem]'} id="home">
      <div className="absolute inset-0 z-[-1] bg-cover bg-center" style={{ backgroundImage: 'url("https://s3.amazonaws.com/monstercodes.dev/assets/mc_textura.png")' }}></div>
      <Wrapper>
        <header className={'flex justify-between'}>
          <article className={'relative flex flex-col justify-center leading-3 text-blue-ligth'}>
            <Heading as="h1" className='text-7xl text-blue-ligth'>
              {t('common:introduction.title')}
            </Heading>
            <Heading as="h2" className='bg-[linear-gradient(90deg,var(--blue),var(--blue-ligth))] bg-clip-text text-transparent'>
              {t('common:introduction.subtitle')}
            </Heading>

            <div className={'flex items-center py-3'}>

              <Text>{t('common:introduction.followme')}:</Text>
              <span className={'flex items-center ml-5'}>
                <a className='flex' href="https://github.com/monzter50" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='Github'>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faGithub}
                      size="xs"
                    />
                  </Tooltip>
                </a>

              </span>
              <span className={'flex items-center ml-5'}>
                <a className='flex' href="https://codepen.io/monstercodes" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='CodePen'>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faCodepen}
                      size="xs"
                    />
                  </Tooltip>
                </a>

              </span>
              <span className={'flex items-center ml-5'}>
                <a className='flex' href="https://www.linkedin.com/in/jose-gonzalez-b32228138/" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='Linkedin'>
                    <FontAwesomeIcon
                      size="xs"
                      icon={faLinkedin}
                      className={styles.icon}
                    />
                  </Tooltip>
                </a>

              </span>
              <span className={'flex items-center ml-5'}>
                <a className='flex' href="https://twitter.com/monster_codes" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='Twitter'>
                    <FontAwesomeIcon
                      size="xs"
                      icon={faTwitter}
                      className={styles.icon}
                    />
                  </Tooltip>
                </a>
              </span>
              <span className={'flex items-center ml-5'}>
                <a className='flex' href="https://www.instagram.com/monstercodes/" target="_blank" rel="noreferrer">
                  <Tooltip title='Instagram'>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={styles.icon}
                      size="xs"
                    />
                  </Tooltip>
                </a>
              </span>
              <span className={'flex items-center ml-5'}>
                <a className='flex' href="https://s3.amazonaws.com/monstercodes.dev/assets/CV+Jose+Antonio.pdf" target={'_blank'} rel="noreferrer">
                  <Tooltip title='My CV'>
                    <FontAwesomeIcon
                      icon={faFile}
                      className={styles.iconFile}
                      size="xs"
                    />
                  </Tooltip>
                </a>
              </span>
            </div>
          </article>
          <div className='hidden lg:block'>
            <Image
              src={'https://s3.amazonaws.com/monstercodes.dev/assets/personaje.png'}
              width={300}
              height={500}
            />
          </div>
        </header>
      </Wrapper>
    </section>

  )
}
