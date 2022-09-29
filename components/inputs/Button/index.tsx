import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.css'

interface ButtonProps {
  children?: string | string[] | JSX.Element | JSX.Element[]
  className?: string

}
export default function Button({ children, className = '', ...props }: ButtonProps): JSX.Element {
  const classes = classNames(className, styles.button)
  return <button className={classes} {...props}>{children}</button>
}
