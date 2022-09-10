import Head from "next/head";
import React from 'react'
// Services 
import { getPostBySlug, getAllPosts } from '@lib/api'

import styles from "styles/Post.module.css";
import Wrapper from "@components/Wrapper"
import Layout from "@components/Layout"
import Hero from "@components/Hero"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
export default function Post({ post }) {
  const { content, title, slug } = post
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Codes - Blog</title>
        <link rel="icon" href="/isotipo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      </Head>

      <Layout>
        <Hero title={title} slug={slug}/>
        <Wrapper>
          <ReactMarkdown className={styles.content} remarkPlugins={[remarkGfm]} >
            {content}
          </ReactMarkdown>
        </Wrapper>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  // const content = await markdownToHtml(post?.content || '')

  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
