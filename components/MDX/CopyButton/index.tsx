"use client";
import { Check, Copy } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@lib/utils";

interface CopyButtonProps {
  label: string
  copiedLabel: string
  className?: string
}

/**
 * Copies the text of the nearest code block. Reading it from the DOM keeps the
 * code out of the client payload: the block itself stays server-rendered.
 */
export default function CopyButton({ label, copiedLabel, className }: CopyButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [ copied, setCopied ] = useState(false);

  useEffect(() => {
    if (!copied) { return; }
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [ copied ]);

  const handleCopy = async () => {
    const code = ref.current?.closest("[data-code-block]")?.querySelector("pre code");
    if (!code?.textContent) { return; }
    try {
      // Empty lines are rendered as a single space so they keep their height.
      await navigator.clipboard.writeText(code.textContent.replace(/^ $/gm, ""));
      setCopied(true);
    } catch {
      // Clipboard can be unavailable (insecure context, denied permission).
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleCopy}
      aria-label={label}
      title={copied ? copiedLabel : label}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      {copied
        ? <Check aria-hidden="true" className="h-4 w-4 text-success" />
        : <Copy aria-hidden="true" className="h-4 w-4" />}
      <span className="sr-only" aria-live="polite">{copied ? copiedLabel : ""}</span>
    </button>
  );
}
