import Author from '../types/author';
import memberData from './member-data';

export const fetchAuthorData = (authorId: string): Author => {
  let authorData: Author = {
    name: authorId,
    iconPath: undefined,
  };
  if (!memberData[authorId]) return authorData;
  authorData = memberData[authorId];
  return authorData;
};

export const fetchAllAuthorData = (): Author[] => {
  return Object.keys(memberData).map((memberId) => fetchAuthorData(memberId));
};
