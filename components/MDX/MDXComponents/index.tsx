import { ExternalLink } from "lucide-react";
import type { MDXComponents as MDXComponentMap } from "mdx/types";
import Link from "next/link";
import React, { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";

import CustomImage from "@components/dataDisplay/CustomImage";
import { cn } from "@lib/utils";

import Callout, { CalloutProps, CalloutType } from "../Callout";
import CopyButton from "../CopyButton";

/** Localized strings the post body needs; MDX content has no access to the dictionary. */
export interface MDXLabels {
  copy: string
  copied: string
  callout: Record<CalloutType, string>
}

type HeadingTag = "h2" | "h3" | "h4" | "h5" | "h6";

const headingStyles: Record<HeadingTag, string> = {
  h2: "mt-12 mb-4 text-2xl sm:text-3xl",
  h3: "mt-10 mb-3 text-xl sm:text-2xl",
  h4: "mt-8 mb-3 text-lg sm:text-xl",
  h5: "mt-6 mb-2 text-base",
  h6: "mt-6 mb-2 text-sm uppercase tracking-wide text-muted-foreground"
};

function createHeading(as: HeadingTag) {
  function MDXHeading({ id, children, className, ...props }: ComponentPropsWithoutRef<"h2">) {
    const Tag = as;
    return (
      <Tag id={id} className={cn("group scroll-mt-28 font-bold leading-tight tracking-tight", headingStyles[as], className)} {...props}>
        {id
          ? (
            <a href={`#${id}`} className="rounded-sm no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {children}
              <span aria-hidden="true" className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">#</span>
            </a>
          )
          : children}
      </Tag>
    );
  }
  MDXHeading.displayName = `MDX.${as}`;
  return MDXHeading;
}

function MDXLink({ href = "", className, children, ...props }: ComponentPropsWithoutRef<"a">) {
  const classes = cn(
    "font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    className
  );

  if (href.startsWith("/") || href.startsWith("#")) {
    return <Link href={href} className={classes} {...props}>{children}</Link>;
  }

  if (!/^https?:\/\//.test(href)) {
    // mailto:, tel:, … stay in the same tab.
    return <a href={href} className={classes} {...props}>{children}</a>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
      {children}
      <ExternalLink aria-hidden="true" className="ml-0.5 inline h-3.5 w-3.5 align-baseline" />
    </a>
  );
}

type DataAttributes = { "data-language"?: string; "data-rehype-pretty-code-figure"?: string; "data-rehype-pretty-code-title"?: string };

function isElementWith<P>(node: ReactNode, key: string): node is ReactElement<P> {
  return React.isValidElement(node) && typeof node.props === "object" && node.props !== null && key in node.props;
}

function createCodeFigure(labels: MDXLabels) {
  function CodeFigure({ children, className, ...props }: ComponentPropsWithoutRef<"figure"> & DataAttributes) {
    if (!("data-rehype-pretty-code-figure" in props)) {
      return <figure className={className} {...props}>{children}</figure>;
    }

    const nodes = React.Children.toArray(children);
    const caption = nodes.find((node) => isElementWith<{ children: ReactNode }>(node, "data-rehype-pretty-code-title"));
    const pre = nodes.find((node) => isElementWith<DataAttributes>(node, "data-language"));
    const language = pre && isElementWith<DataAttributes>(pre, "data-language") ? pre.props["data-language"] : undefined;
    const title = caption && isElementWith<{ children: ReactNode }>(caption, "data-rehype-pretty-code-title") ? caption.props.children : null;

    return (
      <figure data-code-block className={cn("my-6 overflow-hidden rounded-lg border border-border bg-card shadow-sm", className)} {...props}>
        <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/60 py-1.5 pl-4 pr-1.5">
          <span className="truncate font-cousine text-xs text-muted-foreground">
            {title ?? <span className="uppercase tracking-wider">{language}</span>}
          </span>
          <CopyButton label={labels.copy} copiedLabel={labels.copied} />
        </div>
        {nodes.filter((node) => node !== caption)}
      </figure>
    );
  }
  CodeFigure.displayName = "MDX.CodeFigure";
  return CodeFigure;
}

function MDXCode({ className, ...props }: ComponentPropsWithoutRef<"code"> & DataAttributes) {
  // Block code (from rehype-pretty-code) is styled through its <pre>; this only styles `inline code`.
  if ("data-language" in props) {
    return <code className={className} {...props} />;
  }
  return (
    <code
      className={cn("rounded-md border border-border bg-muted px-1.5 py-0.5 font-cousine text-[0.875em] font-medium text-primary", className)}
      {...props}
    />
  );
}

export function createMDXComponents(labels: MDXLabels): MDXComponentMap {
  return {
    // PageLayout already renders the page <h1>, so a `#` in a post becomes an <h2>.
    h1: createHeading("h2"),
    h2: createHeading("h2"),
    h3: createHeading("h3"),
    h4: createHeading("h4"),
    h5: createHeading("h5"),
    h6: createHeading("h6"),
    p: ({ className, ...props }) => (
      <p className={cn("my-5 font-roboto text-[1.0625rem] leading-8 text-foreground/90", className)} {...props} />
    ),
    a: MDXLink,
    strong: ({ className, ...props }) => <strong className={cn("font-semibold text-foreground", className)} {...props} />,
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-5 list-disc space-y-2 pl-6 font-roboto marker:text-primary",
          "[&.contains-task-list]:list-none [&.contains-task-list]:pl-1",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("my-5 list-decimal space-y-2 pl-6 font-roboto marker:font-semibold marker:text-primary", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("pl-1 text-[1.0625rem] leading-8 text-foreground/90 [&>ol]:my-2 [&>ul]:my-2 [&_input]:mr-2 [&_input]:accent-primary", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn("my-6 border-l-4 border-nebula/60 bg-muted/40 py-1 pl-5 pr-4 italic text-muted-foreground [&_p]:text-muted-foreground", className)}
        {...props}
      />
    ),
    hr: ({ className, ...props }) => <hr className={cn("my-12 border-border", className)} {...props} />,
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
        <table className={cn("w-full border-collapse font-roboto text-sm", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }) => <thead className={cn("bg-muted", className)} {...props} />,
    tr: ({ className, ...props }) => <tr className={cn("border-b border-border last:border-0 even:bg-muted/30", className)} {...props} />,
    th: ({ className, ...props }) => <th className={cn("px-4 py-2 text-left font-semibold text-foreground", className)} {...props} />,
    td: ({ className, ...props }) => <td className={cn("px-4 py-2 align-top text-foreground/90", className)} {...props} />,
    // Markdown images carry no dimensions, so next/image can't size them; use <CustomImage> when you can.
    img: ({ className, alt = "", ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img alt={alt} loading="lazy" className={cn("my-8 h-auto max-w-full rounded-lg border border-border", className)} {...props} />
    ),
    figure: createCodeFigure(labels),
    pre: ({ className, ...props }) => (
      <pre className={cn("overflow-x-auto py-4 font-cousine text-sm leading-7", className)} {...props} />
    ),
    code: MDXCode,

    // Custom components usable from .mdx files.
    CustomImage,
    Callout: ({ type, ...props }: Omit<CalloutProps, "label">) => (
      <Callout type={type} label={labels.callout[type ?? "info"]} {...props} />
    )
  };
}
