import Head from 'next/head'
import React from 'react'
// Services
import styles from '@styles/Home.module.css'
import { Wrapper, Layout, CardBlog, CardProject } from '@components/Surfaces'
import Header from '@components/Header'
import { getAllFilesFrontMatter } from '@lib/mdx'
import { experiences } from '@lib/data'
import { Heading, Text } from '@components/Typhografy'

import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IPostProps } from '@lib/types/posts.types'
import { SkillsIcon, Timeline } from '@components/dataDisplay'
import { ChevronRightIcon } from 'lucide-react'
import { Icon } from '@components/dataDisplay/SkillsIcon/SkillsIcon.type'
interface IStaticProps {
  locale: 'en-US' | 'es-MX'
}

interface IPostsProps {
  posts: IPostProps[]
}

export async function getStaticProps({ locale }: IStaticProps): Promise<any> {
  const unorderedPosts = await getAllFilesFrontMatter(`_posts/${locale}`)
  return {
    props: { posts: unorderedPosts.filter(post => (post.published && post.locale) === locale) }
  }
}

export default function HomePage({ posts = [] }: IPostsProps): JSX.Element {
  const router = useRouter()
  const locale = router?.locale ?? 'es-MX'
  const skills: Array<keyof typeof Icon> = [
    'Git',
    'Python',
    'Django',
    'React',
    'NodeJs',
    'Javascript',
    'Jest',
    'TestingLibrary',
    'NextJs',
    'TailwindCss',
    'CSS',
    'HTML',
    'Typescript'
  ]
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Codes</title>
        <link rel="icon" href="/isotipo.ico" />
      </Head>

      <Layout isHome>
        <Header />
        <Wrapper>
          <section id='aboutme' className='py-10'>
            <Heading as="h2" className={'my-7'}>{t('common:aboutme.title')}</Heading>
            <Text>{t('common:aboutme.description')}</Text>
          </section>

          <section id='skills' className='py-10'>
            <Heading as="h2" className={'my-7'}>{t('common:skills.title')}</Heading>
            <div className='mb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-2'>
              {skills.map((skill) => (<SkillsIcon key={skill} icon={skill} direction='vertical' />))}

            </div>
          </section>
          <section id='experiences' className='py-10'>
          <Heading as="h2" className={'my-7'}>{t('common:experiences.title')}</Heading>

            <Timeline experiences={experiences}/>
          </section>
          <section id='blog' className='py-10'>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight">{t('common:posts.title')}</h2>
              <Link href={`${locale}/posts`} locale={locale} className="group flex items-center gap-1 text-sm font-medium hover:text-primary">
                {t('common:posts.more')}
                <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className={styles.containerBlog}>
              {
                posts?.map((post: IPostProps, index) => (
                  <CardBlog
                    key={`card-${index}`}
                    title={post.title}
                    author={post.author}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    date={post.date}
                  />
                ))}

            </div>
          </section>

          <section id='project' className='py-10'>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight">{t('common:projects.title')}</h2>
              <Link href={`${locale}/projects`} locale={locale} className="group flex items-center gap-1 text-sm font-medium hover:text-primary">
                {t('common:projects.more')}
                <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className='px-4 sm:px-8 flex flex-col'>
              <div className={'p-0 pb-1'}>
                <CardProject
                  title='LearnAla'
                  imageSrc='/img/projects/learnala.png?height=40&width=40'
                  href='https://www.learnala.com/'
                  description='LearnAla es tu plataforma personalizada que facilita la gestión de contenido, mide los resultados y optimiza el tiempo y recursos de tu organización.' />
              </div>
            </div>
          </section>
        </Wrapper>
      </Layout>
    </div>
  )
}
