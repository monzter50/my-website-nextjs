import Head from 'next/head'
import React from 'react'
// Services
import styles from '@styles/Home.module.css'
import Wrapper from '@components/Surfaces/Wrapper'
import Layout from '@components/Surfaces/Layout'
import Header from '@components/Header'
import CardBlog from '@components/Surfaces/Cards/CardBlog'
import { CardProject } from '@components/index'
import { getAllFilesFrontMatter } from '@lib/mdx'
import Heading from '@components/Typhografy/Heading'
import Text from '@components/Typhografy/Text'

import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IPostProps } from '@lib/types/posts.types'
import SkillsIcon from '@components/dataDisplay/SkillsIcon'
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

HomePage.defaultProps = {
  posts: []
}
export default function HomePage({ posts }: IPostsProps): JSX.Element {
  const router = useRouter()
  const locale = router?.locale ?? 'es-MX'

  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Codes</title>
        <link rel="icon" href="/isotipo.ico" />

      </Head>

      <Layout>
        <Header />
        <Wrapper>
          <section id='aboutme' className='py-10'>
            <Heading as="h2" className={'my-7'}>{t('common:aboutme.title')}</Heading>
            <Text>{t('common:aboutme.description')}</Text>
          </section>
          <section id='skills' className='py-10'>
            <Heading as="h2" className={'my-7'}>{t('common:skills.title')}</Heading>
            <div className='mb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-2'>
              <SkillsIcon icon="Git" direction='vertical' />
              <SkillsIcon icon="Python" direction='vertical' />
              <SkillsIcon icon="Django" direction='vertical' />
              <SkillsIcon icon="React" direction='vertical' />
              <SkillsIcon icon="NodeJs" direction='vertical' />
              <SkillsIcon icon="Javascript" direction='vertical' />
              <SkillsIcon icon="Jest" direction='vertical' />
              <SkillsIcon icon="TestingLibrary" direction='vertical' />
              <SkillsIcon icon="NextJs" direction='vertical' />
              <SkillsIcon icon="TailwindCss" direction='vertical' />
              <SkillsIcon icon="CSS" direction='vertical' />
              <SkillsIcon icon="HTML" direction='vertical' />
              <SkillsIcon icon="Typescript" direction='vertical' />
            </div>
          </section>

          <section id='blog' className='py-10'>
            <Heading as="h2" className={'my-7'}>{t('common:posts.title')}</Heading>
            <div className={styles.containerBlog}>
              {
                posts?.length !== 0 &&
                posts.map((post: IPostProps) => (
                  <CardBlog
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    key={`card-${post?.title}`}
                    title={post.title}
                    author={post.author}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    date={post.date}
                  />
                ))}
              <p className='flex items-center'>
                <Link href={`${locale}/posts`} locale={locale}>
                  <a className="pl-4 sm:pl-8 underline underline-offset-4 font-bold">
                    {t('common:posts.more')}
                  </a>
                </Link>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} className={styles.icon} size="xs" />

              </p>

            </div>
          </section>

          <section id='project' className='py-10'>
            <Heading as="h2" className={'my-7'}>{t('common:projects.title')}</Heading>
            <div className='px-4 sm:px-8 flex flex-col'>
              <div className={styles.containerBlog}>
                <CardProject
                  title='LearnAla'
                  src='/img/projects/learnala.png'
                  href='https://www.learnala.com/'
                  description='LearnAla es tu plataforma personalizada que facilita la gestión de contenido, mide los resultados y optimiza el tiempo y recursos de tu organización.' />
                <p className='flex items-center'>
                  <Link href={`${locale}/projects`} locale={locale}>
                    <a className="underline underline-offset-4 font-bold">
                      {t('common:projects.more')}
                    </a>
                  </Link>
                  <FontAwesomeIcon icon={['fas', 'chevron-right']} className={styles.icon} size="xs" />
                </p>
              </div>

            </div>
          </section>
        </Wrapper>
      </Layout>
    </div>
  )
}
