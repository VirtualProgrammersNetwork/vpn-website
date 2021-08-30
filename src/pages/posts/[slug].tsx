import ErrorPage from 'next/error';
import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import { getAllPosts, getPostBySlug } from '../../lib/posts-utils';
import PostHeader from '../../components/post-header';
import PostType from '../../types/post';

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
export const getStaticProps = async ({ params }: Params) => {
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
export const getStaticPaths = () => {
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
