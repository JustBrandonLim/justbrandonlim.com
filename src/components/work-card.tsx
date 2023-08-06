import Link from "next/link";

interface WorkCard {
  title: string;
  date: string;
  href: string;
  "aria-label": string;
}

export default function WorkCard(props: WorkCard) {
  return (
    <Link
      className="flex items-center justify-between p-5 transition-colors border border-gray-200 rounded-md shadow-md dark:border-gray-800 dark:hover:border-white hover:border-black"
      href={props.href}
      aria-label={props["aria-label"]}
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{props.title}</h3>
        <p>{props.date}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0">
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}
