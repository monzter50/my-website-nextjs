import React from "react";

// Services
import { Wrapper, CardBlog } from "@components/Surfaces";
import { getAllFilesFrontMatter } from "@lib/mdx";
import { IPostProps } from "@lib/types/posts.types";
import PageLayout from "@components/Surfaces/PageLayout";
import { Locale } from "@root/i18n-config";

export type PageProps = {
  params: {
    lang: Locale
  }
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
                {posts?.length !== 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                        {posts?.map((post: IPostProps, index) => (
                            <CardBlog
                                key={`card-${index}`}
                                title={post?.title}
                                author={post.author}
                                excerpt={post.excerpt}
                                slug={post?.slug}
                                date={post.date}
                                locale={locale}
                                coverImage={post.coverImage}
                                readingTime={post.readingTime}
                                tags={post.tags}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="text-6xl mb-4">📝</div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            No posts yet
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-md">
                            Check back soon for new content and updates.
                        </p>
                    </div>
                )}
            </Wrapper>
        </PageLayout>
    );
}
