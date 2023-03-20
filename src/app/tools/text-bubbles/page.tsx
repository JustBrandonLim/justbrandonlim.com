import type { Metadata } from "next";
import TextBubblesCard from "@components/text-bubbles-card";

export const metadata: Metadata = {
  title: "Text Bubbles",
  description: "Use the tool that allows me to add text bubbles via green screen to my videos.",
};

export default function TextBubbles() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-black md:text-4xl">Text Bubbles</h1>
      <p>Use the tool that allows me to add text bubbles via green screen to my videos.</p>
      <TextBubblesCard />
    </section>
  );
}
