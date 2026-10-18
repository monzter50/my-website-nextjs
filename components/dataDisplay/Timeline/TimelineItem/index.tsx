import React from "react";

import { Badge } from "@components/ui/badge";

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
    <li className="relative mb-10 ml-6 last:mb-0">
      <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_12px_hsl(var(--primary)/0.7)]" />
      <time className="text-sm font-semibold leading-none text-primary">{date}</time>
      <h3 className="mb-0 mt-2 text-xl font-bold">{title}</h3>
      {job && <p className="m-0 font-medium text-nebula">{job}</p>}
      {description && <p className="mb-0 mt-3 max-w-3xl leading-relaxed text-muted-foreground">{description}</p>}
      {href && (
        <a href={href} className="mt-3 inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Learn more <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg></a>
      )}
      <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
        {skills?.map(skill => <li key={skill}><Badge variant="secondary">{skill}</Badge></li>)}
      </ul>
    </li>
  );
}
