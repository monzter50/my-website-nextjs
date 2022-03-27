import Head from "next/head";
import React from 'react'
// Services 
import { getAllPosts } from '@lib/api'
import styles from "styles/Home.module.css";
import Layout from "pages/Layout"
import Header from "@components/Header"
import CardBlog from "@components/CardBlog"
import Container from "@components/Container"

export async function getStaticProps() {
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
