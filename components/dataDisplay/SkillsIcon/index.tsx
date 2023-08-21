import React from 'react'
import { ISkillsIcon, MappingComponent } from './SkillsIcon.type'
import Heading from '@components/Typhografy/Heading'
import classNames from 'classnames'

const SkillsIcon = React.memo(function SkillsIcon({ icon, direction = 'horizontal', size = 60, className }: ISkillsIcon) {
  const Icon = MappingComponent[icon].icon
  const title = MappingComponent[icon].title
  const classes = classNames('flex m-3 text-center items-center justify-center', { 'flex-col': direction === 'vertical' }, className)
  return (
        <div className={classes}>
            <Icon size={size}/>
            <Heading as='h5' className='mt-3 font-normal'>
                {title}
            </Heading>
        </div>
  )
})

export default SkillsIcon
