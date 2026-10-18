import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

import { cn } from "@lib/utils";

interface SectionProps {
  id: string
  title?: ReactNode
  action?: {
    href: string
    label?: string
  }
  className?: string
  children: ReactNode
}

/** Home-page section with an anchor id (offset for the fixed navbar) and a heading. */
export default function Section({ id, title, action, className, children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className={cn("scroll-mt-24 py-16", className)}>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 id={titleId} className="m-0 flex items-center gap-3 text-3xl font-bold tracking-tight">
          <span aria-hidden="true" className="text-primary">✦</span>
          {title}
        </h2>
        {action && (
          <Link
            href={action.href}
            className="group flex items-center gap-1 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {action.label}
            <ChevronRightIcon aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
