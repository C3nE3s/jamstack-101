import { Html, Head, Main, NextScript } from "next/document";

// TODO:
// Look into fontawesome kit

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
        {/* <link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" /> */}
      </Head>
      <body className="bg-gray-darkest text-white overscroll-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
