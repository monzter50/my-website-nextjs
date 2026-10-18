import { CalendarIcon, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { IAuthor } from "@lib/types/posts.types";
import { formatDate } from "@lib/utils";
import { Locale } from "@root/i18n-config";

interface CardBlogProps {
  title?: string
  author?: IAuthor
  excerpt?: string
  slug: string
  date: string
  locale: Locale
  /** Already localized, e.g. "5 min read". */
  readingTime?: string
}
export default function CardBlog({ title, author, excerpt, slug, date, locale, readingTime }: CardBlogProps) {

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_0_28px_-8px_hsl(var(--primary)/0.5)]">
      <Link href={`/${locale}/posts/${slug}`} className="flex h-full flex-col rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <CardHeader className="p-5 pb-0">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <CalendarIcon aria-hidden="true" className="h-4 w-4" />
              <time dateTime={date}>{formatDate(date, locale, { year: "numeric",
                month: "short",
                day: "numeric" })}</time>
            </span>
            {readingTime && (
              <span className="flex items-center gap-1">
                <Clock aria-hidden="true" className="h-4 w-4" />
                {readingTime}
              </span>
            )}
          </div>
          <CardTitle className="m-0 text-lg leading-snug transition-colors line-clamp-2 group-hover:text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col p-5">
          <p className="m-0 flex-1 font-roboto text-sm leading-relaxed text-muted-foreground line-clamp-3">{excerpt}</p>
          {author?.name && (
            <span className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="h-6 w-6">
                {author.picture && <AvatarImage src={author.picture} alt="" />}
                <AvatarFallback className="text-xs">{author.name[0]}</AvatarFallback>
              </Avatar>
              {author.name}
            </span>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
