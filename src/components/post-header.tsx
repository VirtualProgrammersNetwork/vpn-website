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
      <div>{author.name}</div>
    </>
  );
};

export default PostHeader;
