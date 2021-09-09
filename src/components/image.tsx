/* eslint-disable @next/next/no-img-element */
type Props = {
  // src: /public/hoge/fuga.png -> /hoge/fuga.png と指定
  src: string;
  alt: string;
  width: string | number | undefined;
  height: string | number | undefined;
};

// img elementのラッパー
// TODO: 画像の最適化等を実装する際に書き換える
const Img = ({ src, alt, width, height }: Props): JSX.Element => {
  return (
    <picture>
      <img
        src={`${process.env.assetPrefix}${src}`}
        alt={alt}
        width={width}
        height={height}
      />
    </picture>
  );
};

export default Img;
