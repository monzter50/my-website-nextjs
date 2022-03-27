import Head from "next/head";
import React from 'react'
// Services 
import { getAllPosts } from '@lib/api'
import styles from "@styles/Home.module.css";
import Layout from "@components/Layout"
import Header from "@components/Header"
import CardBlog from "@components/CardBlog"
import Container from "@components/Container"

async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  return {
    props: { posts },
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

export default function HomePage({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <Header/>
          <Container>
            {posts && posts.length !==0 && posts.map(post =><CardBlog key={`card-${post.title}`} title={post.title} author={post.author} excerpt={post.excerpt} slug={post.slug}/>)}
          </Container>
      </Layout>
    </div>
  );
}
