import React from 'react'
import '@testing-library/jest-dom'

import { render, screen, waitFor, act, cleanup } from '@testing-library/react'

const Providers = ({ children }: React.PropsWithChildren) => {
  return <>{children}</>
}

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: Providers,
    ...options
  })

export { customRender as render, screen, waitFor, act, cleanup }
