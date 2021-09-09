// eslint-disable-next-line sort-imports
import Author from '../types/author';
import Icon from './icon';

type Props = {
  author: Author;
};

// 名前+アイコンのやつ
const AuthorElement = ({ author }: Props): JSX.Element => {
  const icon = <Icon iconPath={author.iconPath} width="32" height="32" />;
  return (
    <div className="min-w-max flex flex-row">
      <div className="flex justify-center m-1">{icon}</div>
      <div className="flex justify-center items-center">{author.name}</div>
    </div>
  );
};

export default AuthorElement;
