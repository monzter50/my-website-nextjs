import { render, screen, waitFor } from '@test/testUtils'
import userEvent from '@testing-library/user-event'

import React from 'react'
import Tooltip from '@components/dataDisplay/Tooltip'
jest.useFakeTimers()

describe('Badges', () => {
  afterEach(() => {
    jest.clearAllTimers()
  })
  it('should render the Badges', async () => {
    render(
      <Tooltip title="Github">
        <p>Tooltip :</p>
      </Tooltip>
    )

    const iconTooltop = screen.getByRole('alert')

    userEvent.click(iconTooltop)
    await Promise.resolve()
    jest.runAllTimers()

    await waitFor(() => expect(screen.getByText(/Github/i)).toBeInTheDocument())
  })
})
