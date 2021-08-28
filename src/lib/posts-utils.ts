import fs from 'fs';
import { join } from 'path';

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
  // 今後fileContentsに対して, front matterのデータを取り出す処理が入る
  const content = fileContents;

  const items: Items = {};

  // 必要なデータだけ取り出す
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
  });

  return items;
};

export const getAllPosts = (fields: string[] = []): Items[] => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));

  return posts;
};
