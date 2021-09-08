import Author from '../types/author';

type Props = {
  author: Author;
};

// 名前+アイコンのやつ
const AuthorElement = ({ author }: Props): JSX.Element => (
  <div className="min-w-max">by {author.name}</div>
);

export default AuthorElement;
