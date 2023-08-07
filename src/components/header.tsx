import Link from "next/link";
import Image from "next/image";
import JustBrandonLim from "@images/justbrandonlim.png";
import NavigationMenu from "@components/navigation-menu";
import NavigationBar from "@components/navigation-bar";

export default function Header() {
  const navigationItems = [
    {
      title: "Works",
      href: "/works",
    },
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "Links",
      href: "/links",
    },
    {
      title: "Uses",
      href: "/uses",
    },
  ];

  return (
    <nav className="flex items-center justify-between">
      <Link className="rounded-full" href="/">
        <Image
          className="w-10 h-10 transition-colors border border-gray-200 rounded-full shadow-md dark:border-gray-800 hover:border-black dark:hover:border-white"
          src={JustBrandonLim}
          alt="JustBrandonLim"
          placeholder="blur"
        />
      </Link>
      <NavigationMenu navigationItems={navigationItems} />
      <NavigationBar navigationItems={navigationItems} />
    </nav>
  );
}
