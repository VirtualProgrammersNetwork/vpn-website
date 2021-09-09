import Link from 'next/link';
import { fetchAllAuthorData } from '../../lib/data-utils';
// eslint-disable-next-line sort-imports
import Author from '../../types/author';
import Icon from '../icon';
import Section from './section';
import Tags from '../tags';

const MemberCard = ({ author }: { author: Author }): JSX.Element => {
  let memnberCard = (
    <div className="w-80 min-w-min m-1 p-2 border rounded-xl">
      <div className="flex flex-wrap">
        <Icon iconPath={author.iconPath} size="80" />
        <div className="flex flex-col justify-center ml-1">
          <div className="text-3xl font-bold min-w-max text-center">
            {author.name}
          </div>
          <div className="text-sm text-gray-600 text-center">
            <i>{author.alphabetName}</i>
          </div>
        </div>
      </div>
      {author.favs && <Tags tags={author.favs} />}
    </div>
  );
  if (author.homepageUrl) {
    memnberCard = (
      <Link href={author.homepageUrl} passHref>
        <div className="cursor-pointer contents">{memnberCard}</div>
      </Link>
    );
  }
  return memnberCard;
};

// VPNのメンバー一覧
const Member = (): JSX.Element => {
  const memberCards = fetchAllAuthorData().map((v) => (
    <MemberCard key={v.name} author={v} />
  ));
  return (
    <Section title="Member">
      <div className="flex flex-wrap justify-start overflow-x-hidden overflow-y-auto max-h-64">
        {memberCards}
      </div>
    </Section>
  );
};

export default Member;
