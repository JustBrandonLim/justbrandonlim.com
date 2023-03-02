import Link from "next/link";
import type { MouseEventHandler } from "react";

type NavigationBarItem = {
  url: string;
  "aria-label": string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function NavgiationBarItem(props: NavigationBarItem) {
  return (
    <Link
      className="transition-colors duration-150 ease-in-out hover:text-black"
      href={props.url}
      aria-label={props["aria-label"]}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
}
