import Link from 'next/link';
// eslint-disable-next-line sort-imports
import HeaderNav from './header-nav';

const Header = (): JSX.Element => (
  <header className="p-2">
    <div className="flex flex-row justify-between max-w-screen-xl container mx-auto p-2">
      <Link href="/">Virtual Programmers&apos; Network</Link>
      <HeaderNav />
    </div>
    <hr />
  </header>
);

export default Header;
