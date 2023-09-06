import Link from "next/link";
import Image from "next/image";
import JustBrandonLim from "@images/justbrandonlim.png";
import NavigationMenu from "@components/shared/components/navigation-menu";
import NavigationBar from "@components/shared/components/navigation-bar";

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
      title: "Others",
      navigationItems: [
        {
          title: "Links",
          href: "/links",
        },
        {
          title: "Uses",
          href: "/uses",
        },
      ],
    },
  ];

  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Image className="w-10 h-10 rounded-full shadow-md" src={JustBrandonLim} alt="JustBrandonLim" title="JustBrandonLim" placeholder="blur" />
      </Link>

      <NavigationMenu navigationItems={navigationItems} />
      <NavigationBar navigationItems={navigationItems} />
    </nav>
  );
}
