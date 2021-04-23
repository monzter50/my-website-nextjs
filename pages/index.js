import Head from "next/head";
import Link from "next/link";
import React from 'react'
import styles from "styles/Home.module.css";
import Layout from "components/Layout"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <p className={styles.description}>
          Get started by editing <Link href="/posts">Next.js!</Link>
        </p>
      </Layout>
    </div>
  );
}
