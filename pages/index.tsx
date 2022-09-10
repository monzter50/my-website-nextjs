import Head from "next/head";
import React from 'react'
// Services 
import { getAllPosts } from '@lib/api'
import styles from "@styles/Home.module.css";
import Wrapper from "@components/Wrapper"
import Layout from "@components/Layout"
import Header from "@components/Header"
import CardBlog from "@components/Surfaces/CardBlog"
import Container from "@components/Surfaces/Container"

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'slug',
    'author',
    'excerpt',
  ])
  return {
    props: { posts },
  }
}

HomePage.defaultProps = {
  posts: [],
}
export default function HomePage({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Codes</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      </Head>

      <Layout>
        <Header/>
        <Wrapper>
          <Container>
            {posts && posts.length !==0 && posts.map(post =><CardBlog key={`card-${post.title}`} title={post.title} author={post.author} excerpt={post.excerpt} slug={post.slug}/>)}
          </Container>
        </Wrapper>
      </Layout>
    </div>
  );
}
