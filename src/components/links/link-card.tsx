import Link from "next/link";

interface LinkCard {
  platform: string;
  handle: string;
  href: string;
  "aria-label": string;
}

export default function LinkCard(props: LinkCard) {
  return (
    <Link
      className="flex justify-between p-5 transition-colors bg-white border border-gray-200 rounded-md shadow-md dark:bg-black dark:border-gray-800 dark:hover:border-white hover:border-black"
      href={props.href}
      aria-label={props["aria-label"]}
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">{props.platform}</h3>
        <p>{props.handle}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="self-center w-5 h-5 shrink-0">
        <path
          fillRule="evenodd"
          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}
