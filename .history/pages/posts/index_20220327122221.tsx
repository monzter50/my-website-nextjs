import Head from "next/head";
import React from 'react'
// Services 
import styles from "styles/Home.module.css";
import Layout from "pages/Layout"
import Header from "@components/Header"
import Container from "@components/Container"

export default function PostPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <Header/>
          <Container>
          PostIndex
          </Container>
      </Layout>
    </div>
  );
}
