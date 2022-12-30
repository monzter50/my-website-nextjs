import React from 'react'
import styles from './Text.module.css'
import classNames from 'classnames'
interface TextProps {
  children: JSX.Element | JSX.Element[] | string | string[]
  className?: string
}

export default function Text({ children, className }: TextProps): JSX.Element {
  const classes = classNames(className, styles.p)
  return <p className={classes}>{children}</p>
}
