import { ArrowLeft, ArrowRight, CalendarIcon, Clock } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import renderMDX from "@components/MDX/custom-mdx";
import PageLayout from "@components/Surfaces/PageLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { getFileBySlug, getFiles, getPublishedPosts } from "@lib/mdx";
import { formatDate } from "@lib/utils";
import { getDictionary } from "@root/get-dictionary";
import { i18n, Locale } from "@root/i18n-config";

interface Props {
  params: Promise<{
    slug: string
    lang: Locale
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang } = await params;
  const post = await getFileBySlug(`_posts/${lang}`, slug);
  if (post.notFound) {
    return {
      title: "Post Not Found | Monster Codes"
    };
  }
  const meta = post.frontmatter;

  return {
    title: `${meta.title} | Monster Codes`,
    description: meta.excerpt ?? "",
    openGraph: {
      title: meta.title ?? "",
      description: meta.excerpt ?? "",
      type: "article",
      authors: [ meta.author?.name ?? "Monster Codes" ],
      publishedTime: meta.date ?? ""
    }
  };
}

export async function generateStaticParams() {
  const allPosts = await Promise.all(
    i18n.locales.map(async (locale) => {
      const files = await getFiles(`_posts/${locale}`);
      return files.map((file: string) => ({
        slug: file.replace(/\.mdx$/, ""),
        lang: locale
      }));
    })
  );

  return allPosts.flat();
}

export default async function Post({ params }: Props) {
  const { slug, lang } = await params;
  const post = await getFileBySlug(`_posts/${lang}`, slug);

  if (post.notFound) {
    notFound();
  }

  const { content, frontmatter: meta } = post;
  const [ dictionary, posts ] = await Promise.all([ getDictionary(lang), getPublishedPosts(lang) ]);
  const t = dictionary.posts;
  const body = await renderMDX(content, { copy: t.copy,
    copied: t.copied,
    callout: t.callout });

  // Posts are sorted newest first: "previous" is the older one.
  const index = posts.findIndex((item) => item.slug === slug);
  const older = index >= 0 ? posts[index + 1] : undefined;
  const newer = index > 0 ? posts[index - 1] : undefined;

  const breadcrumbItems = [
    { label: dictionary.nav?.blog ?? "Blog",
      href: `/${lang}/posts` },
    { label: meta.title ?? "",
      href: `/${lang}/posts/${slug}` }
  ];

  const header = (
    <div className="mt-4 max-w-3xl">
      {meta.excerpt && (
        <p className="mb-5 mt-0 font-roboto text-lg leading-relaxed text-muted-foreground">{meta.excerpt}</p>
      )}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
        {meta.author?.name && (
          <span className="flex items-center gap-2">
            <Avatar className="h-7 w-7">
              {meta.author.picture && <AvatarImage src={meta.author.picture} alt="" />}
              <AvatarFallback className="text-xs">{meta.author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-foreground">{meta.author.name}</span>
          </span>
        )}
        {meta.date && (
          <span className="flex items-center gap-1.5">
            <CalendarIcon aria-hidden="true" className="h-4 w-4" />
            <time dateTime={meta.date}>{formatDate(meta.date, lang)}</time>
          </span>
        )}
        {meta.readingTime && (
          <span className="flex items-center gap-1.5">
            <Clock aria-hidden="true" className="h-4 w-4" />
            {Math.max(1, Math.round(meta.readingTime.minutes))} {t.minRead}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <PageLayout
      title={meta.title ?? ""}
      breadcrumbItems={breadcrumbItems}
      meta={header}
    >
      <article className="mx-auto max-w-3xl">
        {body}
      </article>

      <nav aria-label={dictionary.nav?.blog ?? "Blog"} className="mx-auto mt-16 max-w-3xl border-t border-border pt-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {older
            ? (
              <Link
                href={`/${lang}/posts/${older.slug}`}
                className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground">
                  <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> {t.previous}
                </span>
                <span className="mt-1 block font-semibold text-foreground group-hover:text-primary">{older.title}</span>
              </Link>
            )
            : <span className="hidden sm:block" />}
          {newer && (
            <Link
              href={`/${lang}/posts/${newer.slug}`}
              className="group rounded-lg border border-border bg-card p-4 text-right transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex items-center justify-end gap-1 text-xs uppercase tracking-wide text-muted-foreground">
                {t.next} <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </span>
              <span className="mt-1 block font-semibold text-foreground group-hover:text-primary">{newer.title}</span>
            </Link>
          )}
        </div>
        <Link
          href={`/${lang}/posts`}
          className="mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          {t.back}
        </Link>
      </nav>
    </PageLayout>
  );
}
