import {Head, Html, Main, NextScript} from 'next/document';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
       
        <meta content="notranslate" name="google" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

