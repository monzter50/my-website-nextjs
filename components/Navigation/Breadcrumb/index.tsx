"use client";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link
                        href="/"
                        className="text-slate-400 hover:text-sky-400 transition-colors"
                    >
                        <Home className="h-4 w-4" />
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-slate-600" />
                        <Link
                            href={item.href}
                            className={`ml-2 text-sm font-medium ${
                                index === items.length - 1
                                    ? "text-sky-400 cursor-default"
                                    : "text-slate-400 hover:text-sky-400"
                            } transition-colors`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
