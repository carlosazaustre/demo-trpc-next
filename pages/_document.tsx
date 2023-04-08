import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument(): JSX.Element {
  return (
    <Html data-theme="night">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}