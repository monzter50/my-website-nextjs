import { render, screen } from '@test/testUtils'
import React from 'react'
import CardProject from '../../../../../components/Surfaces/Cards/card-project'

describe('CardProject', () => {
  it('should render the card-project', () => {
    render(
            <CardProject title='LearnAla' src='' href=''/>
    )
  })

  it('should render the props card-project', async () => {
    render(
            <CardProject title='LearnAla' src='/img/projects/learnala.png' href='https://www.learnala.com/'/>
    )
    expect(await screen.findByText(/LearnAla/i)).toBeInTheDocument()
    expect(await screen.getByRole('button')).toHaveAttribute('href', 'https://www.learnala.com/')
    expect(await screen.getByRole('img')).toHaveAttribute('src', '/img/projects/learnala.png')
  })
})
