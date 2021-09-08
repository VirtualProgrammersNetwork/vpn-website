import type { NextPage } from 'next';
// eslint-disable-next-line sort-imports
import Author from '../types/author';
import Contact from '../components/index/contact';
import IndexHero from '../components/index/index-hero';
import Layout from '../components/layout/layout';
import Member from '../components/index/member';
import Post from '../components/index/post';
import PostType from '../types/post';
import WhatIsVPN from '../components/index/what-is-vpn';
import { getAllPosts } from '../lib/posts-utils';

type Props = {
  allPosts: PostType[];
};

/** インデックス ページ */
const IndexPage: NextPage<Props> = ({ allPosts }) => (
  <Layout title="Hello, world!">
    <IndexHero />
    <WhatIsVPN />
    <Member />
    <Post allPosts={allPosts} />
    <Contact />
  </Layout>
);
IndexPage.displayName = 'IndexPage';

export default IndexPage;

// ページに表示する用に全てのブログの要約を取得
// 必要な要素だけ抜き出すので, 型周りがややこしい, そのうち考える
type IndexProps = Promise<{
  props: {
    allPosts: {
      slug?: string;
      title?: string;
      author?: Author;
      tags?: string[];
    }[];
  };
}>;

export const getStaticProps = async (): IndexProps => {
  const allPosts = getAllPosts(['slug', 'title', 'author', 'tags']);

  return {
    props: { allPosts },
  };
};
