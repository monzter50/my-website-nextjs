import fs from 'file-system'

import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const fileSystem:any =fs.fs


console.log("post",postsDirectory)
export function getPostSlugs() {
  return fileSystem.readdirSync(postsDirectory)
}

export function getPostBySlug(slug:any, fields:any = []):any {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  // console.log("api",data,content)
  const items:any = {
    slug:'',
    content:''
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field:string) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields:any = []):any {
  const slugs = getPostSlugs()
  const posts:any = slugs
    .map((slug:any) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1:any, post2:any) => (post1.date > post2.date ? -1 : 1))
  return posts
}