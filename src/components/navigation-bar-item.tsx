import Link from "next/link";

type NavigationBarItem = {
  url: string;
  "aria-label": string;
  children: React.ReactNode;
};

export default function NavigationBarItem(props: NavigationBarItem) {
  return (
    <Link className="transition-colors duration-150 ease-in-out hover:text-black" href={props.url} aria-label={props["aria-label"]}>
      {props.children}
    </Link>
  );
}
