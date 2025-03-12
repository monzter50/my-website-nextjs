import React from 'react'
// Services
import { Wrapper, Layout, CardBlog } from '@components/Surfaces'
import { getAllFilesFrontMatter } from '@lib/mdx'

import { IPostProps } from '@lib/types/posts.types'
import PageLayout from '@components/Surfaces/PageLayout'
import { Locale } from '@root/i18n-config'

export type PageProps = {
  params: {
    lang: Locale
  }
}

const breadcrumbItems = [
  { label: 'Blogs', href: '/posts' }
]


export default async function PostPage({ params }: PageProps): Promise<JSX.Element> {
  
  const { lang } = await params
  const locale = lang
  const unorderedPosts = await getAllFilesFrontMatter(`_posts/${locale}`)
  const posts = unorderedPosts.filter(post => (post.published && post.locale) === locale)
  
  return (
    <PageLayout 
      title="Blogs" 
      breadcrumbItems={breadcrumbItems}
    >
        <Wrapper>
          <div className='mt-4'>
            {
              posts?.length !== 0
                ? posts.map((post: IPostProps, index) => (
                  <CardBlog
                    key={`card-${index}`}
                    title={post?.title}
                    author={post.author}
                    excerpt={post.excerpt}
                    slug={post?.slug}
                    date={post.date}
                  />
                ))
                : <div>No tenemos post</div>
            }
          </div>
        </Wrapper>
            </PageLayout>
  )
}
