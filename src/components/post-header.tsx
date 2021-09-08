import Author from '../types/author';
import Tags from './tags';

type Props = {
  title: string;
  author: Author;
  tags: string[];
};

const PostHeader = ({ title, author, tags }: Props): JSX.Element => {
  return (
    <div className="border-2 rounded-3xl p-4 my-4">
      <h1>{title}</h1>
      <div>by {author.name}</div>
      <Tags tags={tags} />
    </div>
  );
};

export default PostHeader;
