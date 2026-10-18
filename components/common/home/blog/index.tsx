"use client";
import { Telescope } from "lucide-react";
import React, { useContext } from "react";

import { CardBlog } from "@components/Surfaces";
import Section from "@components/Surfaces/Section";
import { IPostProps } from "@lib/types/posts.types";
import { Locale } from "@root/i18n-config";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

export default function Blog({ posts = [], locale }: {posts: IPostProps[], locale: Locale}) {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};

  return (
    <Section id="blog" title={t?.posts?.title} action={{ href: `/${locale}/posts`,
      label: t?.posts?.more }}>
      {posts.length === 0
        ? (
          <p className="m-0 flex items-center gap-2 rounded-xl border border-dashed border-border p-6 text-muted-foreground">
            <Telescope aria-hidden="true" className="h-5 w-5 text-primary" />
            {t?.posts?.empty}
          </p>
        )
        : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post: IPostProps) => (
              <CardBlog
                key={post.slug}
                title={post.title}
                author={post.author}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                locale={locale}
                readingTime={post.readingTime && `${Math.max(1, Math.round(post.readingTime.minutes))} ${t?.posts?.minRead ?? ""}`}
              />
            ))}
          </div>
        )}
    </Section>
  );
}
