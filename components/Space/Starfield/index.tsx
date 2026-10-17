import React from "react";

import { cn } from "@lib/utils";

/** Decorative twinkling star layer. Place inside a `relative isolate` parent. */
export default function Starfield({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("starfield pointer-events-none absolute inset-0 -z-10", className)}
    />
  );
}
