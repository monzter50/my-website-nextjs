import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import { IPostProps } from "@lib/types/posts.types";
import { orderByDate } from "@lib/order-by-date";

const root = process.cwd();

// What the .mdx frontmatter provides; slug and reading time are derived.
type Frontmatter = Omit<IPostProps, "slug" | "readingTime">;

export const getFiles = async (type: string) => {
  return fs.readdirSync(path.join(root, type)).filter((file) => file.endsWith(".mdx"));
};

export const getFileBySlug = async (type: string, slug: string) => {
  const filePath = path.join(root, type, `${slug}.mdx`);
  // Slugs come from the URL: only allow file-name characters.
  if (!/^[\w-]+$/.test(slug) || !fs.existsSync(filePath)) {
    return { notFound: true as const };
  }

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const frontmatter: IPostProps = {
    ...(data as Frontmatter),
    readingTime: readingTime(content),
    slug,
    title: data?.title ?? ""
  };

  return {
    content,
    frontmatter,
    notFound: false as const
  };
};

export const getAllFilesFrontMatter = async (type: string): Promise<IPostProps[]> => {
  const files = await getFiles(type);

  return files
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(root, type, file), "utf8"));
      const post: IPostProps = {
        ...(data as Frontmatter),
        readingTime: readingTime(content),
        slug: file.replace(/\.mdx$/, "")
      };
      return post;
    })
    .sort((prev, current) => Number(orderByDate(prev, current)));
};

/** Published posts for a locale, newest first. */
export const getPublishedPosts = async (locale: string): Promise<IPostProps[]> => {
  const posts = await getAllFilesFrontMatter(`_posts/${locale}`);
  return posts.filter((post) => post.published && post.locale === locale);
};
