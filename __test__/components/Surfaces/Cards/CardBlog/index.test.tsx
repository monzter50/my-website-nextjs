import { render, screen } from '@test/testUtils'
import React from 'react'
import CardBlog from '@components/Surfaces/Cards/CardBlog'

const cardObj = {
  title: 'Nuevo Post',
  author: { name: 'Author ' },
  excerpt: 'Esto si es un postx',
  slug: 'post'
}
describe('CardBlog', () => {
  it('should render the CardBlog', () => {
    render(
            <CardBlog
                title={cardObj?.title}
                author={cardObj.author}
                excerpt={cardObj?.excerpt}
                slug={cardObj?.slug}
            />
    )
  })

  it('should render the props in CardBlog', async () => {
    render(
            <CardBlog
                title={cardObj?.title}
                author={cardObj.author}
                excerpt={cardObj?.excerpt}
                slug={cardObj?.slug}
            />
    )
    expect(await screen.findByText(/Author/i)).toBeInTheDocument()
    expect(await screen.findByText(/Nuevo Post/i)).toBeInTheDocument()
    expect(await screen.findByText(/Esto si es un postx/i)).toBeInTheDocument()
    expect(await screen.getByRole('link')).toHaveAttribute('href', '/es-MXN/posts/post')
  })
})
