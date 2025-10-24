"use client";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";

import { CardBlog } from "@components/Surfaces";
import { IPostProps } from "@lib/types/posts.types";
import { Locale } from "@root/i18n-config";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

export default function Blog({ posts = [], locale }: {posts: IPostProps[], locale: Locale}) {
  const localeContext = useContext(LocaleContext);
  const dictionary: Dictionary = localeContext?.state || {};
  const t = dictionary;

  return (
    <section id='blog' className='py-10'>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">{t?.posts?.title}</h2>
        <Link href={`${locale}/posts`} locale={locale} className="group flex items-center gap-1 text-sm font-medium hover:text-primary">
          {t?.posts?.more}
          <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className={"p-0 pb-1"}>
        {
          posts?.map((post: IPostProps, index) => (
            <CardBlog
              key={`card-${index}`}
              title={post.title}
              author={post.author}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              locale={locale}
            />
          ))}

      </div>
    </section>

  );
}
