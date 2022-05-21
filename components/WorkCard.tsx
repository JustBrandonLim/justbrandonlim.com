import type { NextPage } from "next";

interface WorkCardProps {
  title: string;
  description: string;
  language: string;
  href: string;
}

const WorkCard: NextPage<WorkCardProps> = (workCardProps) => {
  return (
    <a
      className="flex flex-col justify-between gap-5 p-5 transition-all duration-300 ease-in-out rounded-lg shadow-lg bg-neutral-700 hover:bg-neutral-600 hover:scale-105"
      href={workCardProps.href}
      aria-label={workCardProps.title + " on GitHub"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4 className="font-bold text-white">{workCardProps.title}</h4>
      <p className="text-neutral-300">{workCardProps.description}</p>
      <p className="text-neutral-300">{workCardProps.language ? workCardProps.language : "N/A"}</p>
    </a>
  );
};

export default WorkCard;
