import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavItemProps {
  href: string;
  "aria-label": string;
  external?: boolean;
  children: React.ReactNode;
  onClick?: Dispatch<SetStateAction<boolean>>;
}

const NavItem: NextPage<NavItemProps> = (navItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === navItemProps.href;

  if (navItemProps.external) {
    return (
      <a
        className={isActive ? "text-sky-400" : "text-neutral-300 hover:text-white transition-colors ease-in-out duration-300"}
        href={navItemProps.href}
        aria-label={navItemProps["aria-label"]}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => (navItemProps.onClick ? navItemProps.onClick(() => false) : undefined)}
      >
        {navItemProps.children}
      </a>
    );
  } else {
    return (
      <Link href={navItemProps.href}>
        <a
          className={isActive ? "text-sky-400" : "text-neutral-300 hover:text-white transition-colors ease-in-out duration-300"}
          aria-label={navItemProps["aria-label"]}
          onClick={() => (navItemProps.onClick ? navItemProps.onClick(() => false) : undefined)}
        >
          {navItemProps.children}
        </a>
      </Link>
    );
  }
};

export default NavItem;
