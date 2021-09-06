import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type Items = {
  [key: string]: string;
};

const postsDirectory = join(process.cwd(), 'src/blog_posts');

export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (
  slug_with_exp: string,
  fields: string[] = []
): Items => {
  const slug = slug_with_exp.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContents);

  const items: Items = {};

  // 必要なデータだけ取り出す
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (frontMatter[field]) {
      items[field] = frontMatter[field];
    }
  });

  return items;
};

export const getAllPosts = (fields: string[] = []): Items[] => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));

  return posts;
};
