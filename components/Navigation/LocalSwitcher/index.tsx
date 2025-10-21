"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <div className="flex items-center space-x-1 bg-slate-800/30 rounded-lg p-1 backdrop-blur-sm border border-slate-700/30">
      {i18n.locales.map((l) => {
        const isActive = l === locale;
        return (
          <Link
            key={l}
            href={redirectedPathName(l)}
            className={`
              px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
              ${isActive 
            ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20 ring-1 ring-sky-500/50" 
            : "text-slate-300 hover:bg-slate-700/50 hover:text-sky-400"}
            `}
          >
            {l === "en-US" ? "🇺🇸 EN" : "🇪🇸 ES"}
          </Link>
        );
      })}
    </div>
  );
}
