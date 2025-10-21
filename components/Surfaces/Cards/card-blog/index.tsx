import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Locale } from "@root/i18n-config";

interface Author {
  name: string
  image?: string
}

interface CardBlogProps {
  title?: string
  author?: Author
  excerpt?: string
  slug: string
  date: string
  locale: Locale
}
export default function CardBlog({ title, author, excerpt, slug, date , locale }: CardBlogProps) {

  return (
    <Card className="group overflow-hidden hover:shadow-md transition-all duration-300 my-3">
      <Link href={`/${locale}/posts/${slug}`}>
        <CardHeader className="p-4 pb-0">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              {format(new Date(date), "MMM d, yyyy")}
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Avatar className="w-5 h-5">
                <AvatarImage src={author?.image} alt={author?.name} />
                <AvatarFallback>{author?.name?.[0]}</AvatarFallback>
              </Avatar>
              {author?.name}
            </div>
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  );
}
