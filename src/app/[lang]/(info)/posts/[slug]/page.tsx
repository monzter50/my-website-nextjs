import { Metadata } from "next";

import CustomMDX from "@components/MDX/custom-mdx";
import PageLayout from "@components/Surfaces/PageLayout";
import { getFileBySlug, getFiles } from "@lib/mdx";
import { Locale } from "@root/i18n-config";
interface Props {
  params: {
    slug: string
    lang: Locale
  }
}

interface Frontmatter {
  title: string
  description?: string
  author?: {
    name: string
    picture?: string
  }
  date?: string
  readingTime?: {
    text: string
    minutes: number
    words: number
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang } = await params;
  const { frontmatter } = await getFileBySlug(`_posts/${lang}`, slug);
  const meta = frontmatter as Frontmatter;
  if (!meta) {
    return {
      title: "Post Not Found | Monster Codes"
    };
  }

  return {
    title: `${meta.title} | Monster Codes`,
    description: meta?.description ?? "",
    openGraph: {
      title: meta?.title ?? "",
      description: meta?.description ?? "",
      type: "article",
      authors: [ "Monster Codes" ],
      publishedTime: meta?.date ?? ""
    }
  };
}

export async function generateStaticParams() {
  const locales = [ "es-MX", "en-US" ] as const;

  const allPosts = await Promise.all(
    locales.map(async (locale) => {
      const files = await getFiles(`_posts/${locale}`, locale);
      return files.map((file: string) => ({
        slug: file.replace(/\.mdx/, ""),
        lang: locale
      }));
    })
  );

  return allPosts.flat();
}

export default async function Post({ params }: Props) {
  const { slug, lang } = await params;
  const { source, frontmatter } = await getFileBySlug(`_posts/${lang}`, slug);
  const meta = frontmatter as Frontmatter;

  if (!source) {
    return null;
  }
  const breadcrumbItems = [
    { label: "Blog",
      href: "/posts" },
    { label: meta?.title,
      href: `/posts/${slug}` }
  ];

  return (
    <PageLayout
      title={meta?.title}
      breadcrumbItems={breadcrumbItems}
    >
      <article className="prose prose-slate prose-lg max-w-none dark:prose-invert prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800/50">
        <div className="mb-8 text-slate-400">
          <time dateTime={meta?.date}>
            {meta?.date && new Date(meta?.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
          {meta?.author
            ? (
              <>
                <span className="mx-2">·</span>
                <span>{meta?.author?.name}</span>
              </>
            )
            : null}
        </div>
        <div className="mdx-content">
          {source && <CustomMDX {...source} />}
        </div>
      </article>
    </PageLayout>
  );
}
