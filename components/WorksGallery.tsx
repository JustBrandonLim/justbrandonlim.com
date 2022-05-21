import { NextPage } from "next";
import WorkCard from "@components/WorkCard";

interface Work {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

interface WorksGalleryProps {
  works: Work[];
}

const WorksGallery: NextPage<WorksGalleryProps> = (worksGalleryProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {worksGalleryProps.works.map((work) => (
        <WorkCard title={work.name} description={work.description} language={work.language} href={work.html_url} key={work.name} />
      ))}
    </div>
  );
};

export default WorksGallery;
