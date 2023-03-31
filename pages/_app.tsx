import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/layout';
import { StyleProvider } from '@ant-design/cssinjs';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider hashPriority="high">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyleProvider>
  );
}
