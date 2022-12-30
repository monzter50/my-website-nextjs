import Head from 'next/head'
import React from 'react'
// Services
import styles from '@styles/Home.module.css'
import Wrapper from '@components/Surfaces/Wrapper'
import Layout from '@components/Surfaces/Layout'
import Header from '@components/Header'
import CardBlog from '@components/Surfaces/Cards/CardBlog'
import { CardProject } from '@components/index'
import { getAllFilesFrontMatter } from '@lib/mdx'
import Heading from '@components/Typhografy/Heading'
import useTranslation from "next-translate/useTranslation"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export async function getStaticProps({ locale }: any): Promise<any> {

  const unorderedPosts = await getAllFilesFrontMatter(`_posts/${locale}`)
  return {
    props: { posts: unorderedPosts.filter(post => post.published && post.locale === locale) }
  }
}

HomePage.defaultProps = {
  posts: []
}
export default function HomePage({ posts, instagram }: any): JSX.Element {
  console.log("pago", instagram)
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <Head>
        <title>Monster Codes</title>
        <link rel="icon" href="/isotipo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <Header />
        <Wrapper>
          <section>
            <Heading as="h3" className={'mb-3 mt-7'}>{t("common:posts.title")}</Heading>
            <div className={styles.containerBlog}>
              {
                posts?.length !== 0 &&
                posts.map((post: any) => (
                  <CardBlog
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    key={`card-${post?.title}`}
                    title={post.title}
                    author={post.author}
                    excerpt={post.excerpt}
                    slug={post.slug}
                  />
                ))}
              <p className='flex items-center'>
                <Link href={`${locale}/posts`} locale={locale}>
                  <a className="underline underline-offset-4 font-bold">
                    {t("common:posts.more")}
                  </a>
                </Link>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} className={styles.icon} size="xs" />

              </p>

            </div>
            <hr className='divide-y divide-gray-200' />
          </section>

          <section className='mb-3'>
            <Heading as="h3" className={'mb-3 mt-7'}>{t("common:projects.title")}</Heading>
            <div className='flex flex-col'>
              <div className={styles.containerBlog}>
                <CardProject
                  title='LearnAla'
                  src='/img/projects/learnala.png'
                  href='https://www.learnala.com/'
                  description='LearnAla es tu plataforma personalizada que facilita la gestión de contenido, mide los resultados y optimiza el tiempo y recursos de tu organización.' />
                <p className='flex items-center'>
                  <Link href={`${locale}/projects`} locale={locale}>
                    <a className="underline underline-offset-4 font-bold">
                      {t("common:projects.more")}
                    </a>
                  </Link>
                  <FontAwesomeIcon icon={['fas', 'chevron-right']} className={styles.icon} size="xs" />
                </p>
              </div>



            </div>
            <hr className='divide-y divide-gray-200' />
          </section>
        </Wrapper>
      </Layout>
    </div>
  )
}
