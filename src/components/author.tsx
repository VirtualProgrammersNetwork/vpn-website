import Link from 'next/link';
// eslint-disable-next-line sort-imports
import Author from '../types/author';
import Icon from './icon';

type Props = {
  author: Author;
};

// 名前+アイコンのやつ
const UnlinkedAuthorElement = ({ author }: Props): JSX.Element => {
  const icon = <Icon iconPath={author.iconPath} size="32" />;
  return (
    <div className="min-w-max flex flex-row">
      <div className="flex justify-center m-1">{icon}</div>
      <div className="flex justify-center items-center">{author.name}</div>
    </div>
  );
};

const AuthorElement = ({ author }: Props): JSX.Element => {
  return author.homepageUrl ? (
    <Link href={author.homepageUrl} passHref>
      <div className="max-w-min hover:underline">
        <UnlinkedAuthorElement author={author} />
      </div>
    </Link>
  ) : (
    <UnlinkedAuthorElement author={author} />
  );
};

export default AuthorElement;
