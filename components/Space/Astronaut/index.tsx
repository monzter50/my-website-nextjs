import React, { useId } from "react";

import { cn } from "@lib/utils";

interface AstronautProps {
  className?: string
  /** Accessible name; omit for a purely decorative illustration. */
  title?: string
  float?: boolean
}

// Thick limbs are drawn twice: a wider outline stroke, then the suit stroke on top.
const LIMBS = [
  "M82 152 Q52 168 50 204",
  "M158 150 Q190 132 194 100",
  "M104 222 L100 262",
  "M136 222 L142 262"
];

export default function Astronaut({ className, title, float = true }: AstronautProps) {
  const visorId = useId();
  const glowId = useId();

  return (
    <svg
      viewBox="0 0 240 300"
      className={cn("h-auto w-full", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient id={visorId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" className="[stop-color:hsl(var(--primary))]" />
          <stop offset="100%" className="[stop-color:hsl(var(--nebula))]" />
        </linearGradient>
        <radialGradient id={glowId}>
          <stop offset="0%" className="[stop-color:hsl(var(--primary))] [stop-opacity:0.35]" />
          <stop offset="100%" className="[stop-color:hsl(var(--primary))] [stop-opacity:0]" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="150" r="118" fill={`url(#${glowId})`} />

      <g className={cn("origin-center [transform-box:fill-box]", float && "animate-float")}>
        {/* Backpack */}
        <rect x="62" y="118" width="116" height="104" rx="26" className="fill-[hsl(var(--suit-shade))] stroke-[hsl(var(--suit-line))]" strokeWidth="3" />

        {/* Arms and legs */}
        {LIMBS.map((d) => (
          <path key={`${d}-line`} d={d} fill="none" strokeLinecap="round" strokeWidth="30" className="stroke-[hsl(var(--suit-line))]" />
        ))}
        {LIMBS.map((d) => (
          <path key={d} d={d} fill="none" strokeLinecap="round" strokeWidth="23" className="stroke-[hsl(var(--suit))]" />
        ))}

        {/* Gloves and boots */}
        <circle cx="50" cy="206" r="13" className="fill-[hsl(var(--suit-shade))] stroke-[hsl(var(--suit-line))]" strokeWidth="3" />
        <circle cx="194" cy="98" r="13" className="fill-[hsl(var(--suit-shade))] stroke-[hsl(var(--suit-line))]" strokeWidth="3" />
        <rect x="84" y="256" width="32" height="20" rx="9" className="fill-[hsl(var(--suit-shade))] stroke-[hsl(var(--suit-line))]" strokeWidth="3" />
        <rect x="128" y="256" width="32" height="20" rx="9" className="fill-[hsl(var(--suit-shade))] stroke-[hsl(var(--suit-line))]" strokeWidth="3" />

        {/* Torso */}
        <rect x="74" y="128" width="92" height="104" rx="36" className="fill-[hsl(var(--suit))] stroke-[hsl(var(--suit-line))]" strokeWidth="3" />
        <rect x="98" y="158" width="44" height="28" rx="7" className="fill-muted stroke-[hsl(var(--suit-line))]" strokeWidth="2.5" />
        <circle cx="109" cy="172" r="4.5" className="fill-primary" />
        <circle cx="120" cy="172" r="4.5" className="fill-nebula" />
        <circle cx="131" cy="172" r="4.5" className="fill-success" />
        <path d="M92 204 H148" strokeWidth="3" strokeLinecap="round" className="stroke-[hsl(var(--suit-shade))]" />

        {/* Antenna */}
        <path d="M150 44 L164 20" strokeWidth="3" strokeLinecap="round" className="stroke-[hsl(var(--suit-line))]" />
        <circle cx="165" cy="18" r="6" className="fill-nebula stroke-[hsl(var(--suit-line))]" strokeWidth="2.5" />

        {/* Helmet */}
        <rect x="54" y="78" width="14" height="28" rx="5" className="fill-[hsl(var(--suit-shade))] stroke-[hsl(var(--suit-line))]" strokeWidth="3" />
        <rect x="172" y="78" width="14" height="28" rx="5" className="fill-[hsl(var(--suit-shade))] stroke-[hsl(var(--suit-line))]" strokeWidth="3" />
        <circle cx="120" cy="90" r="56" className="fill-[hsl(var(--suit))] stroke-[hsl(var(--suit-line))]" strokeWidth="3" />
        <rect x="80" y="62" width="80" height="58" rx="29" fill={`url(#${visorId})`} className="stroke-[hsl(var(--suit-line))]" strokeWidth="3" />
        <ellipse cx="102" cy="78" rx="12" ry="6.5" transform="rotate(-25 102 78)" className="fill-white/70" />
        <circle cx="140" cy="102" r="3.5" className="fill-white/50" />
      </g>
    </svg>
  );
}
