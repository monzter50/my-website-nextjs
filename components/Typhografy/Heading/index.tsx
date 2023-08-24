import React from 'react'
import classNames from 'classnames'
type DefaultVariantMapping = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
interface ComponentDynamicProps {
  as?: DefaultVariantMapping
  children: JSX.Element | JSX.Element[] | string | string[]
  className?: string
}

function ComponentDynamic({ as = 'h1', children, className, ...props }: ComponentDynamicProps): JSX.Element {
  const textSize = {
    h1: 'text-5xl font-bold',
    h2: 'text-4xl font-bold',
    h3: 'text-3xl font-bold',
    h4: 'text-2xl font-bold',
    h5: 'text-xl font-bold',
    h6: 'text-lg font-bold'
  }
  const classes = classNames(className, 'text-black dark:text-blue my-2', textSize[as])

  // Create a new component based on the 'as' prop
  const Component = as

  // Render the component
  return <Component className={classes} {...props}>{children}</Component>
}

export default function Heading({ as, children, className, ...props }: ComponentDynamicProps): JSX.Element {
  return <ComponentDynamic as={as} className={className} {...props}>{children}</ComponentDynamic>
}
