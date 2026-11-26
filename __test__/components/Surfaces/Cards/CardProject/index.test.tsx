import { render, screen } from '@test/testUtils'
import React from 'react'
import CardProject from '../../../../../components/Surfaces/Cards/card-project'

describe('CardProject', () => {
  it('should render the card-project', () => {
    render(
            <CardProject title='LearnAla' description='' />
    )
  })

  it('should render the props card-project', async () => {
    render(
            <CardProject
                title='LearnAla'
                description='Learning platform'
                href='https://www.learnala.com/'
            />
    )
    expect(await screen.findByText(/LearnAla/i)).toBeInTheDocument()
    expect(await screen.findByText(/Learning platform/i)).toBeInTheDocument()
  })
})
