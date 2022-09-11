import { Wrapper } from '..'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './Hero.module.css'
interface HeroProps {
  title: string
  slug: string
}
export default function Hero({ title, slug }: HeroProps): JSX.Element {
  return (
    <section className={styles.hero}>

      <Wrapper>
        <div className={styles.breadcrumbs}>
          <Link href={'/'}>
            <a className="">
              home
            </a>
          </Link>
          <FontAwesomeIcon icon={['fas', 'chevron-right']} className={styles.icon} size="xs" />
          <Link href={`/posts/${slug}`}>
            <a className="">
              {slug}
            </a>
          </Link>
        </div>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>{title}</h1>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
