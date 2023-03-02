import Link from "next/link";
import Label from "@components/label";

type BlogPostCard = {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags: string[];
};

export default function BlogPostCard(props: BlogPostCard) {
  return (
    <div className="flex flex-col items-start gap-5 p-5 bg-white border rounded-lg shadow-lg border-slate-200">
      <div>
        <h3 className="text-lg font-bold text-black">{props.title}</h3>
        <p>{props.date}</p>
      </div>
      <p>{props.description}</p>
      <div className="flex flex-col items-start gap-5 mt-auto">
        <Link
          className="flex items-center justify-between gap-5 p-3 text-white duration-150 ease-in-out bg-indigo-700 rounded-lg hover:bg-indigo-700/80 transform-colors"
          href={`/blog/${props.slug}`}
          aria-label="Read more"
        >
          Read more
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <div className="flex flex-wrap items-center gap-5">
          {props.tags.map((tag, i) => {
            return <Label key={i} text={tag} />;
          })}
        </div>
      </div>
    </div>
  );
}
