import type { Metadata } from "next";
import { allWorks } from "contentlayer/generated";
import WorkCard from "@components/works/work-card";

export const metadata: Metadata = {
  title: "Works",
  description: "Things that I did.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    siteName: "JustBrandonLim",
    type: "website",
    title: "Works",
    description: "Things that I did.",
    locale: "en_SG",
    url: "/works",
    images: [
      {
        url: "/api/image?title=Works | JustBrandonLim",
        alt: "Works | JustBrandonLim",
      },
    ],
  },
};

export default function Works() {
  const works = allWorks.sort((a, b) => b.date.localeCompare(a.date, "en-SG"));

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Works</h1>
        <h2>Things that I did.</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {works.map((work, i) => {
          return (
            <WorkCard
              key={i}
              title={work.title}
              date={new Date(work.date).toLocaleString("en-SG", { day: "numeric", month: "long", year: "numeric" })}
              href={work.url}
              aria-label={work.title}
            />
          );
        })}
      </div>
    </section>
  );
}
