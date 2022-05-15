import { Html, Head, Main, NextScript } from "next/document";
import SiteConfig from "../site.config";

const Document = () => {
  return (
    <Html className="scroll-smooth" lang={SiteConfig.language}>
      <Head />
      <body className="font-rubik bg-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
