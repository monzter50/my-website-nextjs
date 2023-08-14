import React from 'react'
import classNames from 'classnames'
interface TextProps {
  children: JSX.Element | JSX.Element[] | string | string[]
  className?: string
}

export default function Text({ children, className }: TextProps): JSX.Element {
  const classes = classNames(className, 'text-base font-normal')
  return <p className={classes}>{children}</p>
}
