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
        <div className="min-h-screen">
            <div className="bg-slate-900">
                <Wrapper>
                    <div className="pt-10 pb-6">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="mt-4 text-3xl font-bold text-slate-200">{title}</h1>
                    </div>
                </Wrapper>
            </div>
            <div className="bg-white py-10">
                <Wrapper>
                    {children}
                </Wrapper>
            </div>
        </div>
    );
}
