import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';
// eslint-disable-next-line sort-imports
import Footer from './footer';
import Header from './header';

type Props = {
  title: string;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => (
  <>
    <NextSeo title={title} />
    <Header />
    <main className="max-w-screen-2xl container mx-auto my-2 p-5" tw="prose">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
