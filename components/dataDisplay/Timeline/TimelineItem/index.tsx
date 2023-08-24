import Heading from '@components/Typhografy/Heading'
import Text from '@components/Typhografy/Text'

import React from 'react'

export interface ITimelineItem {
  href?: string
  title: string
  date: string
  description?: string
  skills?: string[]
  job?: string
}

export default function TimelineItem({ title, date, description, href, skills = [], job }: ITimelineItem) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-blue dark:bg-blue"></div>
      <time className="mb-1 text-sm font-semibold leading-none text-blue dark:text-blue-dark">{date}</time>
      <Heading as='h5' className='mb-0'>{title}</Heading>
      {job && <Heading as='h6' className='font-normal mt-0'>{job}</Heading>}
      {description && <Text >{description}</Text>}
      {href && <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg></a>}
      <ul className='flex flex-wrap'>
        {skills?.map(skill => <li className='mr-3 mt-3' key={skill}><span className="flex items-center rounded-full bg-blue-dark dark:bg-blue px-3 py-1 text-xs font-medium leading-5 text-white">{skill}</span></li>)}

      </ul>
    </li>
  )
}
