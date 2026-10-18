import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, Info, Lightbulb, OctagonAlert } from "lucide-react";
import React, { ReactNode } from "react";

import { cn } from "@lib/utils";

export const calloutVariants = cva(
  "my-6 flex gap-3 rounded-lg border border-l-4 p-4 text-[0.95rem] leading-relaxed [&_p]:my-0 [&_p+p]:mt-2",
  {
    variants: {
      type: {
        info: "border-primary/30 border-l-primary bg-primary/5",
        tip: "border-success/30 border-l-success bg-success/5",
        warning: "border-warning/40 border-l-warning bg-warning/5",
        danger: "border-destructive/30 border-l-destructive bg-destructive/5"
      }
    },
    defaultVariants: {
      type: "info"
    }
  }
);

const icons = {
  info: { Icon: Info,
    className: "text-primary" },
  tip: { Icon: Lightbulb,
    className: "text-success" },
  warning: { Icon: AlertTriangle,
    className: "text-warning" },
  danger: { Icon: OctagonAlert,
    className: "text-destructive" }
};

export type CalloutType = NonNullable<VariantProps<typeof calloutVariants>["type"]>;

export interface CalloutProps extends VariantProps<typeof calloutVariants> {
  title?: string
  /** Localized name of the type, read by screen readers and used when there is no title. */
  label: string
  children: ReactNode
  className?: string
}

export default function Callout({ type, title, label, children, className }: CalloutProps) {
  const { Icon, className: iconClass } = icons[type ?? "info"];

  return (
    <aside role="note" aria-label={title ?? label} className={cn(calloutVariants({ type }), className)}>
      <Icon aria-hidden="true" className={cn("mt-0.5 h-5 w-5 shrink-0", iconClass)} />
      <div className="min-w-0 text-foreground">
        <p className="mb-1 font-semibold">{title ?? label}</p>
        {children}
      </div>
    </aside>
  );
}
