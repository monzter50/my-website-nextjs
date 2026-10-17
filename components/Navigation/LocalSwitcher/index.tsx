"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@lib/utils";
import { i18n, type Locale } from "@root/i18n-config";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) { return "/"; }
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/60 p-1">
      {i18n.locales.map((l) => {
        const isActive = l === locale;
        return (
          <Link
            key={l}
            href={redirectedPathName(l)}
            hrefLang={l}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-accent hover:text-primary"
            )}
          >
            {l === "en-US" ? "🇺🇸 EN" : "🇪🇸 ES"}
          </Link>
        );
      })}
    </div>
  );
}
