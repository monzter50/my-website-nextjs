"use client";
import Image from "next/image";
import React, { useContext } from "react";

import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

export default function Footer() {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};

  return (
    <footer className="mt-auto border-t border-border bg-card/60">
      <div className="mx-auto flex w-11/12 max-w-[1200px] flex-col items-center gap-2 py-6 text-center">
        <div className="flex items-center gap-2">
          <Image height={30} width={30} src="https://s3.amazonaws.com/monstercodes.dev/assets/isotipo.svg" alt="Monster Codes" />
          <a
            className="rounded-sm text-sm text-primary underline underline-offset-4 hover:text-nebula focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            href="mailto:jglez.dev@gmail.com"
          >
            jglez.dev@gmail.com
          </a>
        </div>
        <p className="m-0 text-xs text-muted-foreground">
          © 2021-present Jose Gonzalez Castro. {t?.footer?.rights}
        </p>
      </div>
    </footer>
  );
}
