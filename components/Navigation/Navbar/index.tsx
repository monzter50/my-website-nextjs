"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import { Logotipo } from "@components/Icons";
import Wrapper from "@components/Surfaces/Wrapper";
import { cn } from "@lib/utils";
import { Locale } from "@root/i18n-config";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

import LocaleSwitcher from "../LocalSwitcher";
import ThemeToggle from "../ThemeToggle";

const SECTIONS = [
  { id: "home", key: "home" },
  { id: "aboutme", key: "aboutme" },
  { id: "skills", key: "skills" },
  { id: "experiences", key: "experiences" },
  { id: "blog", key: "blog" },
  { id: "project", key: "project" }
] as const;

export default function Navbar({ locale }: { locale: Locale }) {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    if (!isOpen) { return; }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setIsOpen(false); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ isOpen ]);

  const links = SECTIONS.map(({ id, key }) => ({ href: `/${locale}#${id}`, label: t?.nav?.[key] }));

  return (
    <>
      <nav
        aria-label={t?.nav?.primary}
        className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/75 backdrop-blur-lg"
      >
        <Wrapper>
          <div className="flex h-16 items-center justify-between">
            <Link
              href={`/${locale}`}
              aria-label="Monster Codes"
              className="flex-shrink-0 rounded-md text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Logotipo height={40} width={120} />
            </Link>

            <div className="hidden md:flex md:items-center md:gap-4">
              <ul className="m-0 flex list-none items-center gap-1 p-0">
                {links.map(({ href, label }) => (
                  <li key={href}><Link href={href} className="nav-link">{label}</Link></li>
                ))}
              </ul>
              <div className="flex items-center gap-2 border-l border-border pl-4">
                <ThemeToggle />
                <LocaleSwitcher locale={locale} />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? t?.nav?.close : t?.nav?.menu}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </Wrapper>
      </nav>

      {/* Rendered outside <nav>: its backdrop-filter would trap position:fixed children. */}
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        id="mobile-menu"
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-72 border-r border-border bg-card shadow-xl transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full invisible"
        )}
      >
        <div className="flex h-full flex-col gap-4 overflow-y-auto p-4 pt-20">
          <ul className="m-0 list-none space-y-1 p-0">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2 border-t border-border pt-4">
            <ThemeToggle />
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </>
  );
}
