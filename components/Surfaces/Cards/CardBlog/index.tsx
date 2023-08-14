import React from 'react'
import NextLink from 'next/link'
import Heading from '@components/Typhografy/Heading'
import Text from '@components/Typhografy/Text'
import { useRouter } from 'next/router'
import { formatDate } from '@lib/utils'

interface CardBlogProps {
  title?: string
  author?: any
  excerpt?: any
  slug: string
  date: string
}
export default function CardBlog({ title, author, excerpt, slug, date }: CardBlogProps): JSX.Element {
  const router = useRouter()
  const locale = router?.locale ?? 'es-MXN'
  const formatedDate = formatDate(date)

  return (

    <div className='mb-4 cursor-pointer relative p-4 sm:p-8 rounded grid content-start  border-2 border-blue-ligth sm:border-transparent hover:border-blue-ligth duration-300 h-full  focus:ring-2 focus:ring-blue-ligth focus:border-transparent' role='card'>
      <NextLink href={`/${locale}/posts/${slug}`} locale={locale} role='link'>
          <article>
            <Heading as='h4' className='font-semibold'>{title ?? ''}</Heading>
            <Text className='text-base'>{excerpt}</Text>
            <Text className='text-sm opacity-80'>{author.name}</Text>
            <Text className='text-right font-semibold'>{formatedDate}</Text>
          </article>
      </NextLink>
    </div>

  )
}
