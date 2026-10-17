"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";

import { Astronaut, Starfield } from "@components/Space";
import { Button } from "@components/ui/button";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

export default function NotFound() {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};
  const lang = localeContext?.lng ?? "es-MX";

  return (
    <section className="space-gradient relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-28">
      <Starfield />
      <div className="flex max-w-xl flex-col items-center text-center">
        <Astronaut className="w-48 sm:w-56" />
        <p className="text-cosmic m-0 mt-6 text-6xl font-bold tracking-tight">404</p>
        <h1 className="mb-0 mt-2 text-3xl font-bold tracking-tight">{t?.notFound?.title ?? "Lost in space"}</h1>
        <p className="mb-0 mt-3 text-muted-foreground">
          {t?.notFound?.description ?? "The page you were looking for drifted out of orbit."}
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href={`/${lang}`}>
            <ArrowLeft aria-hidden="true" />
            {t?.notFound?.back ?? "Back to base"}
          </Link>
        </Button>
      </div>
    </section>
  );
}
