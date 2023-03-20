import type { Metadata } from "next";
import TextBubblesCard from "@components/text-bubbles-card";

export const metadata: Metadata = {
  title: "Text Bubbles",
  description: "Check out the text bubbles that I used in my videos.",
};

export default function TextBubbles() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-black md:text-4xl">Text Bubbles</h1>
      <p>Check out the text bubbles that I used in my videos.</p>
      <TextBubblesCard />
    </section>
  );
}
