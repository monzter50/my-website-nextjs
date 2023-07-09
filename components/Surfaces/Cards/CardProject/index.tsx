/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './CardProject.module.css'
import Heading from '../../../Typhografy/Heading'
import Text from '../../../Typhografy/Text'
import Badges from '../../../dataDisplay/Badges'

interface CardProjectProps {
  title: string
  src: string
  description?: string
  href: string
}
export default function CardProject({ title, src, description, href }: CardProjectProps): JSX.Element {
  return (
        <a className="hover:underline" href={href} target={'_blank'} rel="noreferrer" role='link'>
            <article className={`${styles.container} flex items-center md:flex-row flex-col `}>
                <img src={src} alt="" className={styles.image} />
                <div>
                    <div>
                        <Heading className='mt-1' as='h3'>
                            {title}
                        </Heading>
                        <Badges active />
                    </div>
                    <Text>
                        <>{description}</>
                    </Text>
                </div>
            </article>
        </a>
  )
}
