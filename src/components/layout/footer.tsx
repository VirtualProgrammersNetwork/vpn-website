import Link from 'next/link';

const Footer = (): JSX.Element => (
  <footer className="flex flex-col mx-0 my-16 h-12">
    <hr />
    <div className="flex flex-grow items-center p-1 justify-center">
      <p>
        &copy; 2021{'  '}
        <Link href="https://github.com/VirtualProgrammersNetwork/vpn-website">
          Virtual Programmers
        </Link>
      </p>
    </div>
  </footer>
);

export default Footer;
