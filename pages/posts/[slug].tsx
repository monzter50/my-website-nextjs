import Head from 'next/head'
import React from 'react'
// Services

import { MDXRemote } from 'next-mdx-remote'
import styles from 'styles/Post.module.css'
import Wrapper from '@components/Surfaces/Wrapper'
import Layout from '@components/Surfaces/Layout'
import Hero from '@components/Hero'
import { getFileBySlug, getFiles } from '@lib/mdx'
import { merge } from '@lib/utils'
import { MDXComponents } from '@components/MDXComponents'
type ParamsType = {
  slug: string
}
type ParamsProps = {
  params: ParamsType
  locale: string
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
        <Hero title={title} href={`/posts/${slug}`} slug={slug}/>
        <Wrapper>
          <div className='my-4'>
            <MDXRemote {...source} components={MDXComponents} />
          </div>

        </Wrapper>
      </Layout>
    </div>
  )
}

export async function getStaticPaths({ locales }: any): Promise<any> {
  const allPosts = await Promise.all(
    locales.map(async (locale: any) => await getFiles(`_posts/${locale}`, locale))
  )
  const allPaths = allPosts.map((posts) =>
    posts.files.map((post: any) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
      locale: posts.locale
    }))
  )

  const paths = merge(allPaths[0], allPaths[1])
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params, locale }: ParamsProps): Promise<any> {
  const { slug } = params
  const { notFound, source, frontmatter } = await getFileBySlug(`_posts/${locale}`, slug)
  if (notFound) {
    return {
      notFound: true,
    }
  }
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
