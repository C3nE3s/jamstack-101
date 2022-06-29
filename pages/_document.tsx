import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*Fonts*/}
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Favicon */}
        <link rel="icon" href="images/jam_favicon.svg" />
      </Head>
      <body className="bg-gray-darkest text-white overscroll-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
