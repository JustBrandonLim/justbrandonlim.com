import type { NextPage } from "next";
import { useRouter } from "next/router";
import SiteConfig from "../../site.config";

interface Work {
  title: string;
  description: string;
  slug: string;
  featured: boolean;
}

const TimetableGrabberSIT: NextPage = () => {
  const slug = useRouter().query.slug;

  const work = SiteConfig.works.find((work: Work) => work.slug === slug);

  return (
    <div className="min-h-screen">
      <section className="container max-w-2xl gap-5 p-5">
        <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">{work?.title}</h1>
        <div className="flex flex-col gap-5 p-5 rounded-lg shadow-lg bg-zinc-700">
          <p className="text-slate-300">{work?.description}</p>
        </div>
      </section>
    </div>
  );
};

export default TimetableGrabberSIT;
