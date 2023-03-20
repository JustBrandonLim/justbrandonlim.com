import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advocates",
  description: "Check out the causes that I advocate for.",
};

export default function Advocates() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-black md:text-4xl">Advocates</h1>
      <p>Check out the causes that I advocate for.</p>
      <p>Coming soon.</p>
    </section>
  );
}
