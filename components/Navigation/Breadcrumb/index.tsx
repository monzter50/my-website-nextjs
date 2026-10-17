"use client";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};
  const lang = localeContext?.lng ?? "es-MX";

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="m-0 flex list-none items-center space-x-2 p-0">
        <li>
          <Link
            href={`/${lang}`}
            aria-label={t?.nav?.home}
            className="rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Home aria-hidden="true" className="h-4 w-4" />
          </Link>
        </li>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              <ChevronRight aria-hidden="true" className="h-4 w-4 text-muted-foreground/60" />
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`ml-2 rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isCurrent
                    ? "cursor-default text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
