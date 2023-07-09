import React from 'react'
import styles from './Heading.module.css'
import classNames from 'classnames'
type DefaultVariantMapping = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
interface ComponentDynamicProps {
  as?: DefaultVariantMapping
  children: JSX.Element | JSX.Element[] | string | string[]
  className?: string
}

function ComponentDynamic({ as = 'h1', children, className, ...props }: ComponentDynamicProps): JSX.Element {
  const classes = classNames(className, styles[as])

  // Create a new component based on the 'as' prop
  const Component = as

  // Render the component
  return <Component className={classes} {...props}>{children}</Component>
}

export default function Heading({ as, children, className, ...props }: ComponentDynamicProps): JSX.Element {
  return <ComponentDynamic as={as} className={className} {...props}>{children}</ComponentDynamic>
}
