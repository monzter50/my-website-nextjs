"use client";
import { ReactNode } from "react";

import { Wrapper } from "@components/Surfaces";
import Breadcrumb from "@components/Navigation/Breadcrumb";

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
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                <Wrapper>
                    <div className="pt-10 pb-8">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="mt-6 text-4xl font-bold text-white tracking-tight">
                            {title}
                        </h1>
                    </div>
                </Wrapper>
            </div>
            <div className="bg-white dark:bg-slate-950 py-12">
                <Wrapper>
                    {children}
                </Wrapper>
            </div>
        </div>
    );
}
