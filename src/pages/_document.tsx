import Document, { Head, Html, Main, NextScript } from 'next/document';

/** ドキュメント ルート コンポーネント */
export default class MyDocument extends Document {
  /** Render the virtual DOM structure */
  render(): JSX.Element {
    return (
      <Html
        lang="ja"
        prefix="og: http://ogp.me/ns# article: http://ogp.me/ns/article# website: http://ogp.me/ns/website#"
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
