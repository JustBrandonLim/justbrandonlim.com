import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavItemProps {
  href: string;
  "aria-label": string;
  children: React.ReactNode;
  external?: boolean;
}

const NavItem: NextPage<NavItemProps> = (navItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === navItemProps.href;

  return (
    <Link href={navItemProps.href}>
      <a
        className={isActive ? "text-sky-400" : "text-neutral-300 hover:text-white transition-colors ease-in-out duration-300"}
        aria-label={navItemProps["aria-label"]}
      >
        {navItemProps.children}
      </a>
    </Link>
  );
};

const NavBar: NextPage = () => {
  return (
    <nav className="container max-w-3xl p-5">
      <div className="flex items-center justify-between">
        <button className="inline-block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className="hidden md:flex md:gap-10">
          <li>
            <NavItem href="/" aria-label="Home">
              Home
            </NavItem>
          </li>
          <li>
            <NavItem href="/works" aria-label="Home">
              Works
            </NavItem>
          </li>
          <li>
            <NavItem href="/gears" aria-label="Home">
              Gears
            </NavItem>
          </li>
          <li>
            <NavItem href="/resume" aria-label="Home">
              Resume
            </NavItem>
          </li>
          <li>
            <NavItem href="/contact" aria-label="Home">
              Contact
            </NavItem>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
