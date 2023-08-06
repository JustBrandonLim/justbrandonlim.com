import type { Metadata } from "next";
import { allWorks } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import WorkCard from "@components/work-card";

export const metadata: Metadata = {
  title: "Works",
  description: "Things that I did.",
};

export default function Works() {
  const works = allWorks.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Works</h1>
        <h2>Things that I did.</h2>
      </div>

      <div className="flex flex-col gap-10">
        {works.map((work, i) => {
          return <WorkCard key={i} title={work.title} date={format(parseISO(work.date), "LLLL d, yyyy")} href={work.url} aria-label={work.title} />;
        })}
      </div>
    </section>
  );
}
