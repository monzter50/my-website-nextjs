import { compileMDX } from "next-mdx-remote/rsc";

import { mdxOptions } from "@lib/mdx-options";

import { createMDXComponents, MDXLabels } from "../MDXComponents";

/**
 * Compiles a post body on the server. It's a function rather than the
 * `<MDXRemote>` async component because @types/react 18 can't type async JSX
 * components. Only <CopyButton> hydrates on the client.
 */
export default async function renderMDX(source: string, labels: MDXLabels) {
  const { content } = await compileMDX({
    source,
    options: { mdxOptions },
    components: createMDXComponents(labels)
  });
  return content;
}
