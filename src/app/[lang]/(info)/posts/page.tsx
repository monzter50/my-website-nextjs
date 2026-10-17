import { Telescope } from "lucide-react";
import type { Metadata } from "next";
import React from "react";

import { CardBlog } from "@components/Surfaces";
import PageLayout from "@components/Surfaces/PageLayout";
import { getAllFilesFrontMatter } from "@lib/mdx";
import { IPostProps } from "@lib/types/posts.types";
import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";

export type PageProps = {
  params: Promise<{
    lang: Locale
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
    
  return {
    title: `${dictionary.posts.title} | Monster Codes`,
    description: `${dictionary.posts.title} - Monster Codes`,
  };
}

export default async function PostPage({ params }: PageProps) {

  const { lang } = await params;
  const locale = lang;
  const unorderedPosts = await getAllFilesFrontMatter(`_posts/${locale}`);
  const posts = unorderedPosts.filter(post => (post.published && post.locale) === locale);
  const dictionary = await getDictionary(lang);
  const title = dictionary.nav?.blog ?? "Blog";
  const breadcrumbItems = [ {
    label: title,
    href: `/${locale}/posts`
  } ];

  return (
    <PageLayout
      title={title}
      breadcrumbItems={breadcrumbItems}>
      {posts.length === 0
        ? (
          <p className="m-0 flex items-center gap-2 rounded-xl border border-dashed border-border p-6 text-muted-foreground">
            <Telescope aria-hidden="true" className="h-5 w-5 text-primary" />
            {dictionary.posts?.empty}
          </p>
        )
        : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post: IPostProps, index) => (
              <CardBlog
                key={`card-${index}`}
                title={post?.title}
                author={post.author}
                excerpt={post.excerpt}
                slug={post?.slug}
                date={post.date}
                locale={locale}
              />
            ))}
          </div>
        )}
    </PageLayout>
  );
}
