import Link from 'next/link';
import PostType from '../../types/post';
import Section from './section';
import Tags from '../tags';

const PostSummaryCard = ({ postData }: { postData: PostType }): JSX.Element => (
  <Link href={`/posts/${postData.slug}`} passHref>
    <div className="flex flex-col border-2 rounded-xl cursor-pointer hover:bg-gray-200">
      <div className="m-2">
        <div className="text-xl">{postData.title}</div>
        <div className="min-w-max">by {postData.author.name}</div>
      </div>
      <Tags tags={postData.tags} />
    </div>
  </Link>
);

// VPNに投稿された記事一覧
type Props = {
  allPosts: PostType[];
};

const Post = ({ allPosts }: Props): JSX.Element => {
  const summaryCards = allPosts.map((postData) => (
    <PostSummaryCard key={postData.slug} postData={postData} />
  ));
  return (
    <Section title="Post">
      <div className="overflow-y-auto">{summaryCards}</div>
    </Section>
  );
};

export default Post;
