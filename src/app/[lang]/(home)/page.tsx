import type { Metadata } from "next";
import React from "react";

import AboutMe from "@components/common/home/aboutme";
import Blog from "@components/common/home/blog";
import Experiences from "@components/common/home/experiences";
import Projects from "@components/common/home/projects";
import Skills from "@components/common/home/skills";
import Header from "@components/Header";
import Wrapper from "@components/Surfaces/Wrapper";
import { getAllFilesFrontMatter } from "@lib/mdx";
import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";

export type PageProps = {
  params: {
    lang: Locale
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
    
  return {
    title: dictionary.introduction.title,
    description: dictionary.aboutme.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang;
  const unorderedPosts = await getAllFilesFrontMatter(`_posts/${locale}`);
  const posts = unorderedPosts.filter(post => (post.published && post.locale) === locale);
  return (
    <div className={"flex flex-col min-h-screen"}>
      <Header />
      <Wrapper>
        <AboutMe />
        <Skills />
        <Experiences />
        <Blog posts={posts} locale={locale} />
        <Projects locale={locale} />
      </Wrapper>
    </div>
  );
}
