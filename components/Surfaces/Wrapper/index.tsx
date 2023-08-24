import React from 'react'

export default function Wrapper({ children }: any): JSX.Element {
  return (
    <section className={'mx-auto max-w-[1200px] w-11/12'}>
      {children}
    </section>
  )
}
