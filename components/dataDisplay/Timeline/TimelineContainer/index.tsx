import React from 'react'

interface ITimelineContainer {
  children: React.ReactNode
}

export default function TimelineContainer({ children }: ITimelineContainer) {
  return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {children}
        </ol>
  )
}
