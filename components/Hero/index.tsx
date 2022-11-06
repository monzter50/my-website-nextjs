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
    <section className={`${styles.hero} pt-24`}>

      <Wrapper>
        <div className={`${styles.breadcrumbs} flex items-center mt-4`}>
          <Link href={'/'}>
            <a className="underline underline-offset-4 font-bold">
              home
            </a>
          </Link>
          <FontAwesomeIcon icon={['fas', 'chevron-right']} className={styles.icon} size="xs" />
          <Link href={`/posts/${slug}`}>
            <a className="underline underline-offset-4 font-bold">
              {slug}
            </a>
          </Link>
        </div>
        <div className={"flex items-center h-4/5"}>
          <div>
            <Heading className={styles.title}>{title}</Heading>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
