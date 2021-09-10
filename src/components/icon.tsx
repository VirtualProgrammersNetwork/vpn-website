import { css } from '@emotion/react';
// eslint-disable-next-line sort-imports
import Img from './image';

const IconStyle = css`
  img {
    margin: 0;
    display: inline-block;
    border-radius: 9999px;
  }
`;

type Props = {
  iconPath: string | undefined;
  size: string | number;
};

const Icon = ({ iconPath, size }: Props): JSX.Element => {
  const icon = iconPath ? (
    <Img src={iconPath} alt="icon" width={size} height={size} />
  ) : (
    <div
      css={css`
        width: ${size}px;
        height: ${size}px;
      `}
      className="m-0 rounded-full bg-gray-400"
    >
      {' '}
    </div>
  );
  return (
    <div className="m-0 p-0" css={IconStyle}>
      {icon}
    </div>
  );
};

export default Icon;
