import Image from "next/image";

import { cn } from "@lib/utils";

interface CustomImageProps {
  src: string
  alt?: string
  // MDX attributes arrive as strings (`height="400"`).
  width?: number | string
  height?: number | string
  caption?: string
  className?: string
}

export default function CustomImage({ src, alt = "", width = 800, height = 600, caption, className }: CustomImageProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
        sizes="(min-width: 768px) 768px, 100vw"
        className={cn("h-auto w-full rounded-lg border border-border bg-muted object-contain", className)}
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
