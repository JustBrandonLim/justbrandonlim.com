import type { Metadata } from "next";
import { PortfolioData } from "@data/portfolio";
import PortfolioCard from "@components/portfolio-card";

export const metadata: Metadata = {
  title: "Portfolio - Brandon Lim Jing Zhi",
  description: "Discover some of my best works that I have accomplished.",
};

export default function Portfolio() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-black md:text-4xl">Portfolio</h1>
      <p>Discover some of my best works that I have accomplished.</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 auto-rows-fr">
        {PortfolioData.map((project, i) => {
          return <PortfolioCard key={i} title={project.title} description={project.description} stack={project.stack} github={project.github} />;
        })}
      </div>
    </section>
  );
}
