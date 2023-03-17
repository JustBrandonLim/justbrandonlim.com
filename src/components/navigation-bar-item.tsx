"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavigationBarItem {
  url: string;
  "aria-label": string;
  children: React.ReactNode;
}

export default function NavigationBarItem(props: NavigationBarItem) {
  const currentRoute = usePathname();

  return (
    <Link
      className={`transition-colors duration-150 ease-in-out ${currentRoute == props.url ? "text-black" : "hover:text-black"}`}
      href={props.url}
      aria-label={props["aria-label"]}
    >
      {props.children}
    </Link>
  );
}
