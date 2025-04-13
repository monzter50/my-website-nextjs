import React from "react";
import type { Metadata } from "next";

// Services
import { Wrapper, CardBlog } from "@components/Surfaces";
import { getAllFilesFrontMatter } from "@lib/mdx";
import { IPostProps } from "@lib/types/posts.types";
import PageLayout from "@components/Surfaces/PageLayout";
import { Locale } from "@root/i18n-config";
import { getDictionary } from "@root/get-dictionary";

export type PageProps = {
  params: {
    lang: Locale
  }
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
    const breadcrumbItems = [ {
        label: "Blogs",
        href: "/posts"
    } ];

    return (
        <PageLayout
            title="Blogs"
            breadcrumbItems={breadcrumbItems}>

            <Wrapper>
                <div className='mt-4'>

                    {posts?.length !== 0 ?
                        posts?.map((post: IPostProps, index) => (
                            <CardBlog
                                key={`card-${index}`}
                                title={post?.title}
                                author={post.author}
                                excerpt={post.excerpt}
                                slug={post?.slug}
                                date={post.date}
                                locale={locale}
                            />
                        )):
                        ( <div>No tenemos post</div>)}
                </div>
            </Wrapper>
        </PageLayout>
    );
}
