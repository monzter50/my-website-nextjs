"use client";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useContext, useEffect, useState } from "react";

import { cn } from "@lib/utils";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

const OPTIONS = [
  { value: "light", Icon: Sun },
  { value: "dark", Icon: Moon },
  { value: "system", Icon: Monitor }
] as const;

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};
  // The stored theme is only known on the client; avoid a hydration mismatch.
  const [ mounted, setMounted ] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      role="group"
      aria-label={t?.theme?.label}
      className={cn("flex items-center gap-1 rounded-lg border border-border bg-muted/60 p-1", className)}
    >
      {OPTIONS.map(({ value, Icon }) => {
        const label = t?.theme?.[value];
        const isActive = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive && "bg-background text-primary shadow-sm"
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
