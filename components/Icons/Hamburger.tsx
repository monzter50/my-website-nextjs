import React from 'react'
import classnames from 'classnames'
interface IIcons {
  className?: string
  size: number
  onClick?: () => void
}
export default function Hamburger({ className, size = 100, ...props }: IIcons) {
  const classes = classnames(className)
  return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className={classes}
            height={size}
            width={size}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...props}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
  )
}
