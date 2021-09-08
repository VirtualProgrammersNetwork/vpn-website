/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import Section from './section';

const Contact = (): JSX.Element => (
  <Section title="Contact">
    <p>
      // TODO: VPN問い合わせフォーム用意する
      <br />
      // フォームができるまでの間, VPNへのお問い合わせは,
      珠響そうきのツイッターにおねがいします
      <br />
      VPN参加希望の方は, 珠響そうきのツイッターまで！
      <Link href="https://twitter.com/tamayurasouki">@tamayurasouki</Link>
    </p>
  </Section>
);

export default Contact;
