import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@components/shared/header";
import Footer from "@components/shared/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: {
    template: "%s | JustBrandonLim",
    default: "JustBrandonLim",
  },
  description: "Software engineer from Singapore.",
  metadataBase: new URL("https://justbrandonlim.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "JustBrandonLim",
    type: "website",
    title: {
      template: "%s | JustBrandonLim",
      default: "JustBrandonLim",
    },
    description: "A software engineer from Singapore.",
    locale: "en_SG",
    url: "/",
    images: [
      {
        url: "/api/image?title=JustBrandonLim",
        alt: "JustBrandonLim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en_SG" className="antialiased" suppressHydrationWarning={true}>
      <head>
        <script src="/scripts/theme.js" />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} dark:bg-black bg-white dark:text-white text-black text-sm max-w-2xl m-auto p-5 font-inter min-h-screen flex flex-col gap-10`}
      >
        <header>
          <Header />
        </header>
        <main className="grow">{children}</main>
        <footer>
          <Footer />
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
