import type { GetStaticProps, NextPage } from "next";
import SearchEngineOptimization from "@components/SearchEngineOptimization";
import WorksGallery from "@components/WorksGallery";
import SiteConfig from "../site.config";

interface Work {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

interface WorksProp {
  data: Work[];
}

const Works: NextPage<WorksProp> = (worksProp) => {
  return (
    <>
      <SearchEngineOptimization title="Works" url="works" />
      <section className="container max-w-3xl p-5">
        <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Works</h1>
        <p className="mb-5 text-neutral-300">Here are all the open sourced works that I have done throughout the years.</p>
        <WorksGallery works={worksProp.data} />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const result = await fetch("https://api.github.com/users/" + SiteConfig.socials.github + "/repos?sort=created");
  const data = await result.json();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export default Works;
