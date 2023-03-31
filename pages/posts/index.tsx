import Head from 'next/head'
import React from 'react'
// Services
import styles from 'styles/Home.module.css'
import Wrapper from '@components/Surfaces/Wrapper'
import Layout from '@components/Surfaces/Layout'
import Hero from '@components/Hero'
import { getAllFilesFrontMatter } from '@lib/mdx'
import { CardBlog } from '@components/index'
import Heading from '@components/Typhografy/Heading'
import useTranslation from 'next-translate/useTranslation'
interface IStaticProps {
  locale: 'en-US' | 'es-MX'
}
interface IPostProps {
  title?: string
  author?: string
  excerpt?: string
  slug: string
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

PostPage.defaultProps = {
  posts: []
}

export default function PostPage({ posts }: IPostsProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Codes - All Article</title>
        <link rel='icon' href='/isotipo.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Roboto&display=swap' rel='stylesheet' />
      </Head>

      <Layout>
        <Hero title={'All Article'} href={'/posts'} slug={'posts'} />
        <Wrapper>
          <div className='mt-4'>
            <Heading as='h3' className={'mb-2'}>{t('common:posts.title')}</Heading>
            {
              posts?.length !== 0
                ? posts.map((post: IPostProps, index) => (
                  <CardBlog
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    key={`card-${index}`}
                    title={post?.title}
                    author={post.author}
                    excerpt={post.excerpt}
                    slug={post?.slug}
                  />
                ))
                : <div>No tenemos post</div>
            }
          </div>
        </Wrapper>
      </Layout>
    </div>
  )
}
