import Head from "next/head";
import React from 'react'
// Services 
import { getPostBySlug,getAllPosts } from '@lib/api'
import styles from "styles/Home.module.css";
import Layout from "@components/Layout"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
export default function Post({ post}) {
  return (
    <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <ReactMarkdown remarkPlugins={[remarkGfm]} >
        {post.content}
      </ReactMarkdown>
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
