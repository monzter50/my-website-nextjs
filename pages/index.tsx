import Head from 'next/head'
import React from 'react'
// Services
import styles from '@styles/Home.module.css'
import Wrapper from '@components/Surfaces/Wrapper'
import Layout from '@components/Surfaces/Layout'
import Header from '@components/Header'
import CardBlog from '@components/Surfaces/CardBlog'
import Container from '@components/Surfaces/Container'
import { getAllFilesFrontMatter } from '@lib/mdx'

export async function getStaticProps({ locale }: any): Promise<any> {

  const unorderedPosts = await getAllFilesFrontMatter(`_posts/${locale}`)
  return {
    props: { posts: unorderedPosts.filter(post => post.published && post.locale === locale) }
  }
}

HomePage.defaultProps = {
  posts: []
}
export default function HomePage({ posts }: any): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Codes</title>
        <link rel="icon" href="/isotipo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <Header />
        <Wrapper>
          <Container>
            <div className={styles.containerBlog}>
              {
                posts?.length !== 0 &&
                posts.map((post: any) => (
                  <CardBlog
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    key={`card-${post?.title}`}
                    title={post.title}
                    author={post.author}
                    excerpt={post.excerpt}
                    slug={post.slug}
                  />
                ))}
            </div>

          </Container>
        </Wrapper>
      </Layout>
    </div>
  )
}
