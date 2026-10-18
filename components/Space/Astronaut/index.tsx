import React, { useId } from "react";

import { cn } from "@lib/utils";

interface AstronautProps {
  className?: string
  /** Accessible name; omit for a purely decorative illustration. */
  title?: string
  float?: boolean
}

// Monster Codes mascot, redrawn from the brand illustration. Colours come from
// the --suit* tokens in styles/globals.css.
const LIGHT = "fill-[hsl(var(--suit))]";
const MID = "fill-[hsl(var(--suit-shade))]";
const DARK = "fill-[hsl(var(--suit-dark))]";

// Thin limbs are drawn twice: a wider outline stroke, then the skin stroke on top.
const LIMBS = [
  "M110 196 L94 264",
  "M130 196 L146 264",
  "M92 152 Q80 164 98 176",
  "M148 152 Q160 164 142 176"
];

export default function Astronaut({ className, title, float = true }: AstronautProps) {
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
        <radialGradient id={glowId}>
          <stop offset="0%" className="[stop-color:hsl(var(--primary))] [stop-opacity:0.3]" />
          <stop offset="100%" className="[stop-color:hsl(var(--primary))] [stop-opacity:0]" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="140" r="118" fill={`url(#${glowId})`} />

      <g className={cn("origin-center [transform-box:fill-box]", float && "animate-float")}>
        <ellipse cx="120" cy="286" rx="92" ry="7" className="fill-[hsl(var(--suit-line))] opacity-30" />

        <g strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" className="stroke-[hsl(var(--suit-line))]">
          {/* Legs and arms */}
          {LIMBS.map((d) => <path key={`${d}-line`} d={d} fill="none" strokeWidth="10" />)}
          {LIMBS.slice(0, 2).map((d) => <path key={d} d={d} fill="none" strokeWidth="6" className="stroke-[hsl(var(--suit))]" />)}

          {/* Sock stripes */}
          <path d="M94 243 L104 245 M92 251 L102 253 M136 245 L146 243 M138 253 L148 251" strokeWidth="3.5" className="stroke-[hsl(var(--suit-shade))]" />

          {/* Shoes */}
          <path d="M90 261 C78 261 62 265 62 273 C62 279 72 281 86 281 L100 281 C104 281 105 273 103 266 C101 262 96 261 90 261 Z" className={DARK} />
          <path d="M150 261 C162 261 178 265 178 273 C178 279 168 281 154 281 L140 281 C136 281 135 273 137 266 C139 262 144 261 150 261 Z" className={DARK} />

          {/* Shorts */}
          <path d="M99 170 H141 L144 202 H124 L120 188 L116 202 H96 Z" className={DARK} />
          <path d="M104 196 H115 M125 196 H136" fill="none" strokeWidth="2" className="stroke-[hsl(var(--suit-shade))]" />

          {/* Shirt */}
          <path d="M102 136 Q120 131 138 136 L152 146 L146 156 L139 152 L140 172 H100 L101 152 L94 156 L88 146 Z" className={MID} />

          {/* Arms (drawn over the shirt) and gloves on the hips */}
          {LIMBS.slice(2).map((d) => <path key={d} d={d} fill="none" strokeWidth="6" className="stroke-[hsl(var(--suit))]" />)}
          <path d="M92 170 C92 164 102 163 106 168 C110 172 109 180 104 183 C98 186 91 182 92 176 Z" className={LIGHT} />
          <path d="M148 170 C148 164 138 163 134 168 C130 172 131 180 136 183 C142 186 149 182 148 176 Z" className={LIGHT} />
          <path d="M97 176 L101 178 M134 178 L138 176" fill="none" strokeWidth="1.6" />

          {/* Neck and helmet collar */}
          <rect x="115" y="124" width="10" height="12" rx="3" className={LIGHT} />
          <path d="M68 108 H172 L178 124 Q120 132 62 124 Z" className={MID} />

          {/* Ear pads */}
          <rect x="40" y="46" width="20" height="40" rx="10" className={LIGHT} />
          <rect x="44" y="52" width="11" height="28" rx="5.5" className={MID} />
          <rect x="180" y="46" width="20" height="40" rx="10" className={LIGHT} />
          <rect x="185" y="52" width="11" height="28" rx="5.5" className={MID} />
          <g stroke="none" className="fill-[hsl(var(--suit-line))]">
            <circle cx="49.5" cy="61" r="1.8" />
            <circle cx="49.5" cy="70" r="1.8" />
            <circle cx="190.5" cy="61" r="1.8" />
            <circle cx="190.5" cy="70" r="1.8" />
          </g>

          {/* Helmet, visor and highlight */}
          <path d="M120 6 C170 6 190 18 190 60 C190 100 176 116 120 116 C64 116 50 100 50 60 C50 18 70 6 120 6 Z" className={LIGHT} />
          <path d="M120 20 C162 20 176 28 176 60 C176 92 164 102 120 102 C76 102 64 92 64 60 C64 28 78 20 120 20 Z" className={MID} />
          <path d="M82 66 C80 44 86 34 104 31" fill="none" strokeWidth="6" className="stroke-[hsl(var(--suit))]" />
        </g>
      </g>
    </svg>
  );
}
