import ErrorPage from 'next/error';
import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
// eslint-disable-next-line sort-imports
import { getAllPosts, getPostBySlug } from '../../lib/posts-utils';
import PostHeader from '../../components/post-header';
import PostType from '../../types/post';
import Author from '../../types/author';

type Props = {
  post: PostType;
};

const Post: NextPage<Props> = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const { content } = post;

  return (
    <main tw="prose">
      <PostHeader title={post.title} author={post.author} tags={post.tags} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

// Postの引数を作るところ, 自動で呼び出される
type PostProps = Promise<{
  props: {
    post: {
      slug?: string;
      title?: string;
      author?: Author;
      tags?: string[];
      content: string;
    };
  };
}>;

export const getStaticProps = async ({ params }: Params): PostProps => {
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'author',
    'tags',
    'content',
  ]);
  const { content } = post;

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

// posts以下のpathを作るところ, 自動で呼び出される
type PostsPath = {
  paths: {
    params: {
      slug: string;
    };
  }[];
  fallback: boolean;
};

export const getStaticPaths = (): PostsPath => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
