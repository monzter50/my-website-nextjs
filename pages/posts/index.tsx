import Head from 'next/head'
import React from 'react'
// Services
import styles from 'styles/Home.module.css'
import Wrapper from '@components/Surfaces/Wrapper'
import Layout from '@components/Surfaces/Layout'
import Header from '@components/Header'
import Container from '@components/Surfaces/Container'

export default function PostPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Wrapper>
          <Header />
          <Container>
            PostIndex
          </Container>
        </Wrapper>
      </Layout>
    </div>
  )
}
