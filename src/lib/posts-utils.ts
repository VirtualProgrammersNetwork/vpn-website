import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// eslint-disable-next-line sort-imports
import Author from '../types/author';
import fetchAuthorData from './data-utils';

const postsDirectory = join(process.cwd(), 'src/blog_posts');

export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

type PartialPostType = {
  slug?: string;
  title?: string;
  author?: Author;
  tags?: string[];
  content?: string;
};

export const getPostBySlug = (
  slug_with_exp: string,
  fields: string[] = []
): PartialPostType => {
  const slug = slug_with_exp.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContents);

  const items: PartialPostType = {};

  // 必要なデータだけ取り出す
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'author') {
      items.author = fetchAuthorData(frontMatter.authorId.toString());
    }
    if (field === 'title' && frontMatter[field]) {
      items[field] = frontMatter[field].toString();
    }
    if (field === 'tags' && Array.isArray(frontMatter[field])) {
      items[field] = frontMatter[field].map(
        (value: { toString: () => string }) => value.toString()
      );
    }
  });

  return items;
};

export const getAllPosts = (fields: string[] = []): PartialPostType[] => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));

  return posts;
};
