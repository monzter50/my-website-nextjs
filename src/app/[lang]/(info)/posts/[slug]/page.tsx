import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import PageLayout from "@components/Surfaces/PageLayout";
import { getFileBySlug, getFiles } from "@lib/mdx";
import { Locale } from "@root/i18n-config";
import CustomMDX from "@components/MDX/custom-mdx";
import { Badge } from "@components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
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
    image?: string
  }
  date?: string
  readingTime?: {
    text: string
    minutes: number
    words: number
  }
  coverImage?: string
  tags?: string[]
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
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link
                    href={`/${lang}/posts`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to posts
                </Link>
                {/* Hero Image */}
                {meta?.coverImage && (
                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8 bg-slate-100 dark:bg-slate-800">
                        <Image
                            src={meta.coverImage}
                            alt={meta.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
                {/* Article Header */}
                <header className="mb-8">
                    {/* Tags */}
                    {meta?.tags && meta.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {meta.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
                        {meta?.title}
                    </h1>
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-slate-200 dark:border-slate-800">
                        {/* Author */}
                        {meta?.author && (
                            <>
                                <div className="flex items-center gap-2.5">
                                    <Avatar className="w-9 h-9">
                                        <AvatarImage
                                            src={meta.author.picture || meta.author.image}
                                            alt={meta.author.name}
                                        />
                                        <AvatarFallback>
                                            {meta.author.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium text-slate-700 dark:text-slate-300">
                                        {meta.author.name}
                                    </span>
                                </div>
                                {(meta?.date || meta?.readingTime) && (
                                    <span className="text-slate-300 dark:text-slate-700">•</span>
                                )}
                            </>
                        )}
                        {/* Date */}
                        {meta?.date && (
                            <>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={meta.date}>
                                        {new Date(meta.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })}
                                    </time>
                                </div>
                                {meta?.readingTime && (
                                    <span className="text-slate-300 dark:text-slate-700">•</span>
                                )}
                            </>
                        )}
                        {/* Reading Time */}
                        {meta?.readingTime && (
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>
                                    {meta.readingTime.text || `${meta.readingTime.minutes} min read`}
                                </span>
                            </div>
                        )}
                    </div>
                </header>
                {/* Article Content */}
                <article className="prose prose-slate prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-code:text-primary prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800/50 prose-img:rounded-lg prose-img:shadow-lg">
                    <div className="mdx-content">
                        {source && <CustomMDX {...source} />}
                    </div>
                </article>
                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <Link
                        href={`/${lang}/posts`}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to all posts
                    </Link>
                </footer>
            </div>
        </PageLayout>
    );
}
