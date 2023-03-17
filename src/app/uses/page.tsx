import type { Metadata } from "next";
import { UsesData } from "@data/uses";
import UseCard from "@components/use-card";

export const metadata: Metadata = {
  title: "Uses",
  description: "View my curated collection of hardware, software and equipments that I use daily.",
};

export default function Uses() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-black md:text-4xl">Uses</h1>
      <p>View my curated collection of hardware, software and equipments that I use daily.</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 auto-rows-fr">
        {UsesData.map((use, i) => {
          return <UseCard key={i} title={use.title} items={use.items} />;
        })}
      </div>
    </section>
  );
}
