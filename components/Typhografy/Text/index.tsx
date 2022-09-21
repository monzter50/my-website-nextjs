import React from 'react'

type DefaultVariantMapping = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
interface ComponentDynamicProps {
  as?: DefaultVariantMapping
  children:
  | JSX.Element
  | JSX.Element[]
}

function ComponentDynamic({ as = 'h1', children }: ComponentDynamicProps): JSX.Element {
  switch (as) {
    case 'h1':
      return (
        <h1>{children}</h1>
      )
    case 'h2':
      return (
        <h2>{children}</h2>
      )
    case 'h3':
      return (
        <h3>{children}</h3>
      )
    case 'h4':
      return (
        <h4>{children}</h4>
      )
    case 'h5':
      return (
        <h5>{children}</h5>
      )
    case 'h6':
      return (
        <h6>{children}</h6>
      )
    default:
      return (
        <h1>{children}</h1>
      )
  }
}

export default function Heading({ as, children }: ComponentDynamicProps): JSX.Element {
  return <ComponentDynamic as={as}>{children}</ComponentDynamic>
}
