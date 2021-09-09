import Author from '../types/author';
import Img from './image';

type Props = {
  title: string;
  author: Author;
  tags: string[];
};

const PostHeader = ({ title, author, tags }: Props): JSX.Element => {
  const tagIcons = tags.map((tag) => <div key={tag}>{tag}</div>);
  return (
    <>
      <h1>{title}</h1>
      <div>{tagIcons}</div>
      <div>
        <Img
          src="/author-icons/tamayurasouki.png"
          alt="icon"
          width={50}
          height={50}
        />
        {author.name}
      </div>
    </>
  );
};

export default PostHeader;
