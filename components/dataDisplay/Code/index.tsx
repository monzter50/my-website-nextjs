import React from 'react'
import classNames from 'classnames'
import styles from './Code.module.css'
interface CodeProps {
  className?: string
  children: JSX.Element | JSX.Element[] | string | string[]
}
export default function Code({ className, children }: CodeProps): JSX.Element {
  const classes = classNames(className, styles.code)
  return (
    <pre className={classes}>
      <code >
        {children}
      </code>
    </pre>
  )
}
