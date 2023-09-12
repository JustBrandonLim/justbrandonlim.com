import type { Metadata } from "next";
import UseCard from "@components/uses/use-card";

export const metadata: Metadata = {
  title: "Uses",
  description: "Things that I use.",
  alternates: {
    canonical: "/uses",
  },
  openGraph: {
    siteName: "JustBrandonLim",
    type: "website",
    title: "Uses",
    description: "Things that I use.",
    locale: "en_SG",
    url: "/uses",
    images: [
      {
        url: "/api/image?title=Uses | JustBrandonLim",
        alt: "Uses | JustBrandonLim",
      },
    ],
  },
};

export default function Uses() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Uses</h1>
        <h2>Things that I use.</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <UseCard title="Laptop" product="MacBook Pro (14-inch, 2023)" />
        <UseCard title="Desktop" product="Custom Built, AMD Ryzen 5 5600X, GIGABYTE GeForce RTX&trade; 3060 Ti GAMING OC 8G" />
        <UseCard title="Monitor" product='PRISM+ X240, LG 24" FULL HD IPS' />
        <UseCard title="Keyboard" product="ROYAL KLUDGE RK87, Gateron KS-3 Milky Pro Yellow" />
        <UseCard title="Mouse" product="Logitech G Pro X Superlight Wireless Gaming Mouse, Logitech M240" />
        <UseCard title="Headset" product="Razer BlackShark V2" />
        <UseCard title="Chair" product="IKEA MARKUS" />
        <UseCard title="Desk" product="Custom Built, Wood" />
        <UseCard title="Phone" product="iPhone 12" />
        <UseCard title="Tablet" product="iPad Air (5th Generation)" />
        <UseCard title="Code Editor" product="Visual Studio, Visual Studio Code" />
        <UseCard title="Font" product="Inter, JetBrains Mono" />
        <UseCard title="Video Editor" product="LumaFusion" />
      </div>
    </section>
  );
}
