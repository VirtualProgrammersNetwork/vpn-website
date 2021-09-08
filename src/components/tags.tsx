const TagIcon = ({ tag }: { tag: string }): JSX.Element => (
  <div className="text-xs rounded-full border border-gray-400 p-0.5 m-1 max-w-min max-h-min">
    #{tag}
  </div>
);

const Tags = ({ tags }: { tags: string[] }): JSX.Element => {
  return (
    <div className="flex flex-row overflow-hidden">
      {tags.map((tag) => (
        <TagIcon key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default Tags;
