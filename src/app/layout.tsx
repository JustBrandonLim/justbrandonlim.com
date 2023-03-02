import "./globals.css";
import type { Metadata } from "next";
import NavigationBar from "@components/navigation-bar";
import Footer from "@components/footer";
import { Lexend, Literata, JetBrains_Mono } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const literata = Literata({ subsets: ["latin"], variable: "--font-literata" });
const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: {
    default: "Brandon Lim Jing Zhi",
    template: "%s - Brandon Lim Jing Zhi",
  },
  description:
    "Hey there! I'm Brandon Lim Jing Zhi, and I'm currently a student at the Singapore Institute of Technology, pursuing my degree in BE in Information and Communications Technology (Software Engineering).",
  openGraph: {
    type: "website",
    title: "Brandon Lim Jing Zhi",
    url: `https://justbrandonlim.com/`,
    siteName: "Brandon Lim Jing Zhi",
    description:
      "Hey there! I'm Brandon Lim Jing Zhi, and I'm currently a student at the Singapore Institute of Technology, pursuing my degree in BE in Information and Communications Technology (Software Engineering).",
    images: [{ url: "https://justbrandonlim.com/brandon-lim.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Lim Jing Zhi",
    description:
      "Hey there! I'm Brandon Lim Jing Zhi, and I'm currently a student at the Singapore Institute of Technology, pursuing my degree in BE in Information and Communications Technology (Software Engineering).",
    images: [{ url: "https://justbrandonlim.com/brandon-lim.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${literata.variable} ${jetbrains_mono.variable} font-lexend bg-slate-100 text-slate-600 antialiased max-w-3xl mx-auto min-h-screen flex flex-col gap-10 p-5`}
      >
        <header>
          <NavigationBar />
        </header>
        <main className="grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
