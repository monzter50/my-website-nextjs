import React from 'react'
import classNames from 'classnames'
import styles from './Badges.module.css'
interface BadgesProps {
  className?: string
  active?: boolean
}
export default function Badges({ className, active = true }: BadgesProps): JSX.Element {
  const stylesArr = [styles.badges, active ? styles.online : styles.offline]
  const classes = classNames(className, stylesArr)
  return (
        <div className='flex items-center' role='status'>
            <span className={classes}/>
            {active ? 'online' : 'offline'}
        </div>
  )
}
