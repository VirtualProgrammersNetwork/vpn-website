import type { NextPage } from 'next';
// eslint-disable-next-line sort-imports
import Contact from '../components/index/contact';
import IndexHero from '../components/index/index-hero';
import Layout from '../components/layout/layout';
import Member from '../components/index/member';
import Post from '../components/index/post';
import WhatIsVPN from '../components/index/what-is-vpn';

/** インデックス ページ */
const IndexPage: NextPage = () => (
  <Layout title="Hello, world!">
    <IndexHero />
    <WhatIsVPN />
    <Member />
    <Post />
    <Contact />
  </Layout>
);
IndexPage.displayName = 'IndexPage';

export default IndexPage;
