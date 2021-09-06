import Author from './author';

type PostType = {
  /** ブログのファイル名. URLになる文字列 */
  slug: string;
  title: string;
  author: Author;
  tags: string[];
  /** ブログの本文. Markdown形式 */
  content: string;
};

export default PostType;
