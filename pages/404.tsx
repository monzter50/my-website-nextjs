import Link from 'next/link'
import React from 'react'
import styles from '@styles/404.module.css'
import Heading from '@components/Typhografy/Heading'
export default function NotFound(): JSX.Element {
    return (
        <section className={styles.container}>
            <div>
                <Heading className={styles.title}>404 - Page Not Found</Heading>
                <div className={styles.content}>
                    <div className={styles.astronauts}>
                        <div className={styles.head}>
                            <div className={styles.helmet}>
                                <div className={styles.face}></div>
                            </div>
                        </div>
                        <div className={styles.bodyContainer}>
                            <div className={styles.body}></div>
                        </div>

                    </div>
                    <div className={styles.shadow}></div>
                </div>


                <div className={styles.goBack}>
                <Link  href="/">
                    <a className={styles.link}>
                        Go back home
                    </a>
                </Link>
                </div>
                
            </div>

        </section>
    )
}