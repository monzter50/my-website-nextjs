import { Wrapper } from '..'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Heading from '@components/Typhografy/Heading'
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
            <Heading className={styles.title}>{title}</Heading>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
