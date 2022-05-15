import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import SiteConfig from "../../site.config";

interface Work {
  title: string;
  description: string;
  slug: string;
  stack: string;
  platform: string;
  github: string;
  featured: boolean;
}

interface WorkProps {
  work: Work;
}

const Work: NextPage<WorkProps> = (workProps) => {
  const work: Work = workProps.work;
  return (
    <div className="min-h-screen">
      <section className="container max-w-2xl gap-5 p-5">
        <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">{work.title}</h1>
        <div className="flex flex-col gap-5 p-5 rounded-lg shadow-lg bg-zinc-700">
          <p className="text-slate-300">{work.description}</p>
          <div className="flex flex-col items-start gap-5 md:items-center md:flex-row">
            <p className="p-1 text-sm font-bold text-black bg-teal-300 rounded-lg shadow-lg">STACK</p>
            <p className="text-slate-300">{work.stack}</p>
          </div>
          {work.platform ? (
            <div className="flex flex-col items-start gap-5 md:items-center md:flex-row">
              <p className="p-1 text-sm font-bold text-black bg-teal-300 rounded-lg shadow-lg">PLATFORM</p>
              <p className="text-slate-300">{work.platform}</p>
            </div>
          ) : null}
          {work.github ? (
            <div className="flex flex-col items-start gap-5 md:items-center md:flex-row">
              <p className="p-1 text-sm font-bold text-black bg-teal-300 rounded-lg shadow-lg">GITHUB</p>
              <a
                className="underline text-sky-500 underline-offset-2 hover:text-sky-400"
                href={work.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                {work.title}
              </a>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const works = SiteConfig.works.map((work) => ({
    params: { slug: work.slug },
  }));

  return {
    paths: works,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const work = SiteConfig.works.find((work: Work) => work.slug === slug);

  return {
    props: {
      work: work,
    },
  };
};

export default Work;
