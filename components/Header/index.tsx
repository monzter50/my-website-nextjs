
import React from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typewriter from 'typewriter-effect'
import Wrapper from '@components/Surfaces/Wrapper'
import Heading from '@components/Typhografy/Heading'
import Text from '@components/Typhografy/Text'
import Tooltip from '@components/dataDisplay/Tooltip'
const title: string = "Hi, I'm a"
export default function Header(): JSX.Element {
  return (
    <section className={styles.hero} id="home">
      <Wrapper>
        <header className={`${styles.monster}`}>
          <article className={styles.about}>
            <Heading className={styles.monsterTitle}>

              <>
                {title}

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
              I am a creative, orderly, analytical, self-taught, passionate
              about teaching and learning person. My favorite hobbies is watch
              movies, talk with my wife, run, read articles about new update
              programming language and study new things.
            </Text>

            <div className={styles.social}>

              <Text>Sigueme en:</Text>
              <span className={styles.wrapperIcon}>
                <Tooltip title='Github'>
                  <FontAwesomeIcon
                    target="_blank"
                    href="https://github.com/monzter50"
                    className={styles.icon}
                    icon={['fab', 'github']}
                    size="xs"
                  />
                </Tooltip>
              </span>
              <span className={styles.wrapperIcon}>
                <Tooltip title='CodePen'>
                  <FontAwesomeIcon
                    href="https://codepen.io/monstercodes"
                    target="_blank"
                    className={styles.icon}
                    icon={['fab', 'codepen']}
                  />
                </Tooltip>
              </span>
              <span className={styles.wrapperIcon}>
                <Tooltip title='Linkedin'>
                  <FontAwesomeIcon
                    href="https://www.linkedin.com/in/jose-gonzalez-b32228138/"
                    target="_blank"
                    icon={['fab', 'linkedin']}
                    className={styles.icon}
                  />
                </Tooltip>
              </span>
              <span className={styles.wrapperIcon}>
                <Tooltip title='Twitter'>
                  <FontAwesomeIcon
                    href="https://twitter.com/monster_codes"
                    target="_blank"
                    icon={['fab', 'twitter']}
                    className={styles.icon}
                  />
                </Tooltip>
              </span>
              <span className={styles.wrapperIcon}>
                <Tooltip title='Instagram'>
                  <FontAwesomeIcon
                    href="https://www.instagram.com/monstercodes/"
                    target="_blank"
                    icon={['fab', 'instagram']}
                    className={styles.icon}
                  />
                </Tooltip>
              </span>
              <span className={styles.wrapperIcon}>
                <Tooltip title='My CV'>
                  <FontAwesomeIcon
                    href="https://s3.amazonaws.com/monstercodes.dev/assets/CV+Jose+Antonio.pdf"
                    target={'_blank'}
                    icon={['fas', 'file']}
                    className={styles.iconFile}
                  />
                </Tooltip>
              </span>
            </div>
          </article>

        </header>
      </Wrapper>
    </section>

  )
}
