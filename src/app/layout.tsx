import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@components/header";
import Footer from "@components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: {
    template: "%s | JustBrandonLim",
    default: "JustBrandonLim",
  },
  description: "Software engineer from Singapore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning={true}>
      <head>
        <script src="/theme.js" />
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
      </body>
    </html>
  );
}
