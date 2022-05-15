import { NextPage } from "next";
import Link from "next/link";
import SiteConfig from "../site.config";

interface WorksGalleryProps {
  displayFeaturedOnly?: boolean;
}

const WorksGallery: NextPage<WorksGalleryProps> = (worksGalleryProps) => {
  const displayFeaturedOnly = worksGalleryProps.displayFeaturedOnly ? true : false;

  if (displayFeaturedOnly)
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 auto-cols-fr">
        {SiteConfig.works
          .filter((work) => work.featured === true)
          .map((work) => (
            <Link href={"/works/" + work.slug} key={work.slug}>
              <a
                className="flex flex-col max-h-full gap-5 p-5 transition-colors duration-300 rounded-lg shadow-lg bg-zinc-700 hover:bg-zinc-600"
                aria-label={work.title}
              >
                <h4 className="font-bold text-white">{work.title}</h4>
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
          <Link href={"/works/" + work.slug} key={work.slug}>
            <a
              className="flex flex-col max-h-full gap-5 p-5 transition-colors duration-300 rounded-lg shadow-lg bg-zinc-700 hover:bg-zinc-600"
              aria-label={work.title}
            >
              <h4 className="font-bold text-white">{work.title}</h4>
              <p className="text-slate-300">{work.description}</p>
            </a>
          </Link>
        ))}
      </div>
    );
};

export default WorksGallery;
