import { css } from '@emotion/react';
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
  width: string | number;
  height: string | number;
};

const Icon = ({ iconPath, width, height }: Props): JSX.Element => {
  const icon = iconPath ? (
    <Img src={iconPath} alt="icon" width={width} height={height} />
  ) : (
    <div
      css={css`
        width: ${width}px;
        height: ${height}px;
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
