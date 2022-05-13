import { NextPage } from "next";
import Settings from "../site.config";

interface WorksGalleryProps {
  displayCount?: number;
}

const WorksGallery: NextPage<WorksGalleryProps> = (props) => {
  const displayCount = props.displayCount ? props.displayCount : -1;

  return (
    <div className="flex flex-col items-stretch gap-5 p-5 justify-evenly md:flex-row">
      {displayCount == -1
        ? Settings.works.map((featuredWork) => (
            <div className="flex-1 p-5 rounded-lg bg-zinc-700" id={featuredWork.url}>
              <h4 className="font-bold text-white">{featuredWork.name}</h4>
            </div>
          ))
        : Settings.works.slice(0, displayCount).map((work) => (
            <div className="flex-1 p-5 rounded-lg bg-zinc-700" id={work.url}>
              <h4 className="mb-5 font-bold text-white">{work.name}</h4>
              <p className="text-slate-300">{work.description}</p>
            </div>
          ))}
    </div>
  );
};

export default WorksGallery;
