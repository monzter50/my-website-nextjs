import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Locale } from "@root/i18n-config";

interface CardBlogProps {
  title?: string
  author?: any
  excerpt?: any
  slug: string
  date: string
  locale: Locale
  variant?:string
}



export default function CardBlog({ title, author, excerpt, slug, date , locale, variant}: CardBlogProps) {
    const variantClass = variant === "default" ? "bg-black" : "bg-[#000000]/30 backdrop-blur-3xl";
    return (
        <Card className={`flex items-center group rounded-2xl text-white overflow-hidden hover:shadow-md transition-all max-w-lg duration-300 my-3 text-center px-5 py-5 ${ variantClass }`}>
            <Link href={`/${locale}/posts/${slug}`}>
                <CardHeader className="p-4 pb-0">
                    
                    <CardTitle className="text-3xl px-12 group-hover:text-primary transition-colors line-clamp-2 text-[#00D1F7] leading-tight">{title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2	">
                    <p className="text-sm text-muted-foreground line-clamp-3 ">{excerpt}</p>
                </CardContent>
                <p className="mt-4 text-sm text-gray-400">{author.name}</p>
                <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-2">
                    <div className="mt-4 inline-block px-9 py-1 rounded-full bg-[#000000] text-white text-xs font-medium">
                            {format(new Date(date), "d MMMM, yyyy")}
                    </div>  
                </div>
            </Link>
        </Card>
    );
}
