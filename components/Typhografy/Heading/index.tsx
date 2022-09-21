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
  switch (as) {
    case 'h1':
      return (
        <h1 className={classes} {...props}>{children}</h1>
      )
    case 'h2':
      return (
        <h2 className={classes} {...props}>{children}</h2>
      )
    case 'h3':
      return (
        <h3 className={classes} {...props}>{children}</h3>
      )
    case 'h4':
      return (
        <h4 className={classes} {...props}>{children}</h4>
      )
    case 'h5':
      return (
        <h5 className={classes} {...props}>{children}</h5>
      )
    case 'h6':
      return (
        <h6 className={classes} {...props}>{children}</h6>
      )
    default:
      return (
        <h1 className={classes} {...props}>{children}</h1>
      )
  }
}

export default function Heading({ as, children, className, ...props }: ComponentDynamicProps): JSX.Element {
  return <ComponentDynamic as={as} className={className} {...props}>{children}</ComponentDynamic>
}
