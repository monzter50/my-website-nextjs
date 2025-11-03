import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";

import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Badge } from "@components/ui/badge";
import { Locale } from "@root/i18n-config";

interface CardBlogProps {
  title?: string
  author?: any
  excerpt?: any
  slug: string
  date: string
  locale: Locale
  coverImage?: string
  readingTime?: any
  tags?: string[]
}
export default function CardBlog({
    title,
    author,
    excerpt,
    slug,
    date,
    locale,
    coverImage,
    readingTime,
    tags
}: CardBlogProps) {

    return (
        <Card className="group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-slate-200 dark:border-slate-800 flex flex-col h-full">
            <Link href={`/${locale}/posts/${slug}`} className="flex flex-col h-full">
                {coverImage && (
                    <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <Image
                            src={coverImage}
                            alt={title || "Blog post cover"}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}
                <CardHeader className="p-5 pb-3 flex-grow">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 flex-wrap">
                        <div className="flex items-center gap-1">
                            <CalendarIcon className="w-3.5 h-3.5" />
                            <span>{format(new Date(date), "MMM d, yyyy")}</span>
                        </div>
                        {readingTime && (
                            <>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{readingTime.text || `${readingTime.minutes} min read`}</span>
                                </div>
                            </>
                        )}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {title}
                    </CardTitle>
                    {excerpt && (
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {excerpt}
                        </p>
                    )}
                </CardHeader>
                <CardContent className="p-5 pt-0 mt-auto">
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                            {tags.slice(0, 3).map((tag, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-xs"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                    <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-3">
                        <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                                <AvatarImage src={author?.image} alt={author?.name} />
                                <AvatarFallback className="text-xs">
                                    {author?.name?.[0] || "A"}
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">{author?.name}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
