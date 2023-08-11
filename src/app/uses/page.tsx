import type { Metadata } from "next";
import UseCard from "@components/use-card";

export const metadata: Metadata = {
  title: "Uses",
  description: "Things that I use.",
  alternates: {
    canonical: "/uses",
  },
  openGraph: {
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

      <div className="flex flex-col gap-10">
        <UseCard title="Laptop" product="MacBook Pro (14-inch, 2023)" />
        <UseCard title="Desktop" product="Custom Built, AMD Ryzen 5 5600X, GIGABYTE GeForce RTX&trade; 3060 Ti GAMING OC 8G" />
        <UseCard title="Monitor" product="PRISM+ X240" />
        <UseCard title="Monitor" product='LG 24" FULL HD IPS' />
        <UseCard title="Keyboard" product="ROYAL KLUDGE RK87, Gateron KS-3 Milky Pro Yellow" />
        <UseCard title="Mouse" product="Logitech G Pro X Superlight Wireless Gaming Mouse" />
        <UseCard title="Headset" product="Razer BlackShark V2" />
        <UseCard title="Chair" product="IKEA MARKUS" />
        <UseCard title="Desk" product="Custom Built, Wood" />
        <UseCard title="Phone" product="iPhone 12" />
        <UseCard title="Tablet" product="iPad Air (5th Generation)" />
        <UseCard title="Code Editor" product="Visual Studio, JetBrains Mono, GitHub Theme (GitHub Dark Default), VsVim" />
        <UseCard
          title="Code Editor"
          product="Visual Studio Code, JetBrains Mono, GitHub Theme (GitHub Dark Default), Material Icon Theme, Prettier, Vim, Thunder Client, Headwind, Tailwind CSS IntelliSense, Markdown All in One, CodeSnap"
        />

        {/*<UseCard title="Laptop" products={["MacBook Pro (14-inch, 2023)"]} />
        <UseCard title="Desktop" products={["Custom Built (Windows 11)"]} />
        <UseCard title="Displays" products={["PRISM+ X240", 'LG 24" FULL HD IPS']} />
        <UseCard title="Keyboard" products={["ROYAL KLUDGE RK87 (Modded)"]} />
        <UseCard title="Mouse" products={["Logitech G Pro X Superlight Wireless Gaming Mouse"]} />
        <UseCard title="Headset" products={["Razer BlackShark V2"]} />
        <UseCard title="Chair" products={["IKEA MARKUS"]} />
        <UseCard title="Desk" products={["Custom Built (Wood)"]} />
        <UseCard title="Phone" products={["iPhone 12"]} />
        <UseCard title="Tablet" products={["iPad Air (5th Generation)"]} />
        <UseCard title="Code Editors" products={["Visual Studio", "Visual Studio Code"]} />
        <UseCard title="Watches" products={["Casio Royale", "Seiko Baby Snow Monster"]} />*/}
      </div>
    </section>
  );
}
