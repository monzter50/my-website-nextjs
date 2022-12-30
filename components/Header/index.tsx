
import React from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typewriter from 'typewriter-effect'
import Wrapper from '../Surfaces/Wrapper'
import Heading from '../Typhografy/Heading'
import Text from '../Typhografy/Text'
import Tooltip from '../dataDisplay/Tooltip'
import useTranslation from "next-translate/useTranslation"
import { IconProp } from '@fortawesome/fontawesome-svg-core'

let faInstagram: IconProp = ['fab', 'instagram'];
let faGithub: IconProp = ['fab', 'github'];
let faCodepen: IconProp = ['fab', 'codepen'];
let faLinkedin: IconProp = ['fab', 'linkedin'];
let faTwitter: IconProp = ['fab', 'twitter'];
let faFile: IconProp = ['fas', 'file'];
export default function Header(): JSX.Element {
  const { t } = useTranslation()
  return (
    <section data-testid="HeaderTest" className={`${styles.hero} py-6:lg`} id="home">
      <Wrapper>
        <header className={`${styles.monster}`}>
          <article className={styles.about}>
            <Heading className={styles.monsterTitle}>
                {t("common:introduction.title")}
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
                      icon={faGithub}
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
                      icon={faCodepen}
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
                      icon={faLinkedin}
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
                      icon={faTwitter}
                      className={styles.icon}
                    />
                  </Tooltip>
                </a>
              </span>
              <span className={styles.wrapperIcon}>
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
              <span className={styles.wrapperIcon}>
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

        </header>
      </Wrapper>
    </section>

  )
}
