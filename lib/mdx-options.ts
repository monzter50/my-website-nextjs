import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const prettyCodeOptions: PrettyCodeOptions = {
  // Both themes are emitted as CSS vars (--shiki-light / --shiki-dark) and
  // swapped by the `.dark` class in styles/globals.css.
  theme: {
    light: "github-light",
    dark: "one-dark-pro"
  },
  keepBackground: false,
  // Only fenced blocks: a string here would also turn every `inline code` into a figure.
  defaultLang: { block: "plaintext" }
};

// Compiled on the server by next-mdx-remote/rsc: none of these plugins ship to
// the client.
export const mdxOptions: NonNullable<MDXRemoteProps["options"]>["mdxOptions"] = {
  remarkPlugins: [ remarkGfm ],
  rehypePlugins: [ rehypeSlug, [ rehypePrettyCode, prettyCodeOptions ] ]
};
