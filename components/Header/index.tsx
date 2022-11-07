
import React from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typewriter from 'typewriter-effect'
import Wrapper from '@components/Surfaces/Wrapper'
import Heading from '@components/Typhografy/Heading'
import Text from '@components/Typhografy/Text'
import Tooltip from '@components/dataDisplay/Tooltip'
import useTranslation from "next-translate/useTranslation"
export default function Header(): JSX.Element {
  const {t} = useTranslation()
  return (
    <section className={`${styles.hero} py-6:lg`} id="home">
      <Wrapper>
        <header className={`${styles.monster}`}>
          <article className={styles.about}>
            <Heading className={styles.monsterTitle}>

              <>
              {t("common:introduction.title")}

                <span className={styles.typedwritter}>
                  <Typewriter
                    options={{
                      strings: [
                        'Frontend',
                        'Teacher',
                        'Web Devs'
                      ],
                      autoStart: true,
                      delay: 'natural',
                      loop: true
                    }}

                  />
                </span>
              </>
            </Heading>

            <Text>
              {t("common:introduction.description")}
            </Text>

            <div className={`${styles.social} py-3`}>

              <Text><>{t("common:introduction.followme")}:</></Text>
              <span className={styles.wrapperIcon}>
                <a className='flex' href="https://github.com/monzter50" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='Github'>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={['fab', 'github']}
                      size="xs"
                    />
                  </Tooltip>
                </a>

              </span>
              <span className={styles.wrapperIcon}>
                <a className='flex' href="https://codepen.io/monstercodes" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='CodePen'>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={['fab', 'codepen']}
                      size="xs"
                    />
                  </Tooltip>
                </a>

              </span>
              <span className={styles.wrapperIcon}>
                <a className='flex' href="https://www.linkedin.com/in/jose-gonzalez-b32228138/" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='Linkedin'>
                    <FontAwesomeIcon
                      size="xs"
                      icon={['fab', 'linkedin']}
                      className={styles.icon}
                    />
                  </Tooltip>
                </a>

              </span>
              <span className={styles.wrapperIcon}>
                <a className='flex' href="https://twitter.com/monster_codes" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='Twitter'>
                    <FontAwesomeIcon
                      size="xs"
                      icon={['fab', 'twitter']}
                      className={styles.icon}
                    />
                  </Tooltip>
                </a>
              </span>
              <span className={styles.wrapperIcon}>
                <a className='flex' href="https://www.instagram.com/monstercodes/" target="_blank" rel="noreferrer">
                  <Tooltip title='Instagram'>
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className={styles.icon}
                      size="xs"
                    />
                  </Tooltip>
                </a>
              </span>
              <span className={styles.wrapperIcon}>
                <a className='flex' href="https://s3.amazonaws.com/monstercodes.dev/assets/CV+Jose+Antonio.pdf" target={'_blank'} rel="noreferrer">
                  <Tooltip title='My CV'>
                    <FontAwesomeIcon
                      icon={['fas', 'file']}
                      className={styles.iconFile}
                      size="xs"
                    />
                  </Tooltip>
                </a>
              </span>
            </div>
          </article>

        </header>
      </Wrapper>
    </section>

  )
}
