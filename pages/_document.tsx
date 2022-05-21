import { Html, Head, Main, NextScript } from "next/document";
import SiteConfig from "../site.config";

const Document = () => {
  return (
    <Html className="scroll-smooth" lang={SiteConfig.language}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="JustBrandonLim" />
        <meta name="application-name" content="JustBrandonLim" />
        <meta name="msapplication-TileColor" content="#262626" />
        <meta name="theme-color" content="#262626" />
      </Head>
      <body className="bg-neutral-800 font-rubik">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
