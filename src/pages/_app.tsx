import '../styles/global.css';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import type { VFC } from 'react';

/** アプリケーション ルート コンポーネント */
const App: VFC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);
App.displayName = 'App';

export default App;
