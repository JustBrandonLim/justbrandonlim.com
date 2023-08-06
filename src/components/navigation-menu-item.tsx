"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavigationMenuItem {
  title: string;
  href: string;
}

export default function NavigationMenuItem(props: NavigationMenuItem) {
  const ariaCurrent = usePathname().startsWith(props.href) ? "page" : undefined;

  return (
    <Link
      className='p-2 select-none block transition-colors rounded-md aria-[current="page"]:dark:bg-gray-800 aria-[current="page"]:bg-gray-200 dark:hover:bg-gray-800 hover:bg-gray-200'
      href={props.href}
      aria-label={props.title}
      aria-current={ariaCurrent}
    >
      {props.title}
    </Link>
  );
}
