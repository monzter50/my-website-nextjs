import Head from "next/head";
import React from 'react'
import styles from "styles/Home.module.css";
import Layout from "pages/Layout"
import Home from "pages/Home"
export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <Home/>
      </Layout>
    </div>
  );
}
