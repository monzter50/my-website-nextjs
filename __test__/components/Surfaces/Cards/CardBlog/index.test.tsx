import { render, screen } from '@test/testUtils'
import React from 'react'
import CardBlog from '../../../../../components/Surfaces/Cards/card-blog'

const cardObj = {
  title: 'Nuevo Post',
  author: { name: 'Author ' },
  excerpt: 'Esto si es un postx',
  slug: 'post',
  locale: 'en-US' as const
}
describe('CardBlog', () => {
  it('should render the card-blog', () => {
    render(
            <CardBlog
                title={cardObj?.title}
                author={cardObj.author}
                excerpt={cardObj?.excerpt}
                slug={cardObj?.slug}
                date='2022-09-27T14:05:07.322Z'
                locale={cardObj.locale}
            />
    )
  })

  it('should render the props in card-blog', async () => {
    render(
            <CardBlog
                title={cardObj?.title}
                author={cardObj.author}
                excerpt={cardObj?.excerpt}
                slug={cardObj?.slug}
                date='2022-09-27T14:05:07.322Z'
                locale={cardObj.locale}
            />
    )
    expect(await screen.findByText(/Author/i)).toBeInTheDocument()
    expect(await screen.findByText(/Nuevo Post/i)).toBeInTheDocument()
    expect(await screen.findByText(/Esto si es un postx/i)).toBeInTheDocument()
  })
})
