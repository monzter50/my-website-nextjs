import { ReactNode } from "react";

import Breadcrumb from "@components/Navigation/Breadcrumb";
import { Starfield } from "@components/Space";
import { Wrapper } from "@components/Surfaces";

interface PageLayoutProps {
  children: ReactNode
  breadcrumbItems: Array<{
    label: string
    href: string
  }>
  title: string
}

export default function PageLayout({ children, breadcrumbItems, title }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="space-gradient relative isolate overflow-hidden border-b border-border">
        <Starfield />
        <Wrapper>
          <div className="pb-10 pt-28">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="mb-0 mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          </div>
        </Wrapper>
      </div>
      <div className="bg-background py-10">
        <Wrapper>
          {children}
        </Wrapper>
      </div>
    </div>
  );
}
