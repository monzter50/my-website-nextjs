import Head from 'next/head'
import React from 'react'
// Services

import { MDXRemote } from 'next-mdx-remote'
import styles from 'styles/Post.module.css'
import Wrapper from '@components/Wrapper'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import { getFileBySlug, getFiles } from '@lib/mdx'
import { MDXComponents } from '@components/MDXComponents'
type ParamsType = {
  slug: string
}
type ParamsProps = {
  params: ParamsType
}
export default function Post({ source, title, slug }: any): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Codes - Blog</title>
        <link rel="icon" href="/isotipo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>

      <Layout>
        <Hero title={title} slug={slug} />
        <Wrapper>
          <MDXRemote {...source} components={MDXComponents} />

        </Wrapper>
      </Layout>
    </div>
  )
}

export async function getStaticPaths(): Promise<any> {
  const posts = await getFiles('_posts')
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: ParamsProps): Promise<any> {
  const { slug } = params
  const { source, frontmatter } = await getFileBySlug('_posts', slug)
  return {
    props: {
      title: frontmatter?.title,
      slug,
      source,
      frontmatter: {
        ...frontmatter
      }
    }
  }
}
