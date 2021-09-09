import { css } from '@emotion/react';
// eslint-disable-next-line sort-imports
import Author from '../types/author';
import Img from './image';

const IconStyle = css`
  img {
    margin: 0;
    display: inline-block;
    border-radius: 9999px;
  }
`;

type Props = {
  author: Author;
};

// 名前+アイコンのやつ
const AuthorElement = ({ author }: Props): JSX.Element => {
  const icon = author.iconPath ? (
    <Img src={author.iconPath} alt="icon" width="32" height="32" />
  ) : (
    <div className="m-0 w-8 h-8 rounded-full bg-gray-400"> </div>
  );
  return (
    <div className="min-w-max flex flex-row">
      <div css={IconStyle} className="flex justify-center m-1">
        {icon}
      </div>
      <div className="flex justify-center items-center">{author.name}</div>
    </div>
  );
};

export default AuthorElement;
