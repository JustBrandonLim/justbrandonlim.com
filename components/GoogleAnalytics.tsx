import { NextPage } from "next";
import Script from "next/script";
import SiteConfig from "../site.config";

const GoogleAnalytics: NextPage = () => {
  return (
    <>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=" + SiteConfig.googleAnalyticsTag} strategy="afterInteractive" async={true} />
      <Script id="gtag.js" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${SiteConfig.googleAnalyticsTag}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
