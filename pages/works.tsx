import SearchEngineOptimization from "@components/SearchEngineOptimization";
import WorksGallery from "@components/WorksGallery";
import type { NextPage } from "next";

const Works: NextPage = () => {
  return (
    <>
      <SearchEngineOptimization title="Works" url="works" />
      <div className="min-h-screen">
        <section className="container max-w-2xl p-5">
          <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Works</h1>
          <WorksGallery />
        </section>
      </div>
    </>
  );
};

export default Works;
