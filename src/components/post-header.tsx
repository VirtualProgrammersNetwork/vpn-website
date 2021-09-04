import Image from 'next/image';
import { join } from 'path';
// eslint-disable-next-line sort-imports
import Author from '../types/author';

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
        <Image
          src={join('/author-icons', 'tamayurasouki.png')}
          width={50}
          height={50}
          alt="pics"
        />
        {author.name}
      </div>
    </>
  );
};

export default PostHeader;
