import { NextPage } from "next";
import Link from "next/link";
import SiteConfig from "../site.config";

interface WorksGallery {
  displayFeaturedOnly?: boolean;
}

const WorksGallery: NextPage<WorksGallery> = (worksGallery) => {
  const displayFeaturedOnly = worksGallery.displayFeaturedOnly ? true : false;

  if (displayFeaturedOnly)
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 auto-cols-fr">
        {SiteConfig.works
          .filter((work) => work.featured === true)
          .map((work) => (
            <Link href={work.url} key={work.url}>
              <a className="flex flex-col max-h-full gap-5 p-5 rounded-lg shadow-lg bg-zinc-700 hover:bg-zinc-600" aria-label={work.name}>
                <h4 className="font-bold text-white">{work.name}</h4>
                <p className="text-slate-300">{work.description}</p>
              </a>
            </Link>
          ))}
      </div>
    );
  else
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {SiteConfig.works.map((work) => (
          <Link href={work.url} key={work.url}>
            <a className="flex flex-col max-h-full gap-5 p-5 rounded-lg shadow-lg bg-zinc-700 hover:bg-zinc-600" aria-label={work.name}>
              <h4 className="font-bold text-white">{work.name}</h4>
              <p className="text-slate-300">{work.description}</p>
            </a>
          </Link>
        ))}
      </div>
    );
};

export default WorksGallery;
