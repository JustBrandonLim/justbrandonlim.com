import Link from "next/link";
import Image from "next/image";
import Favicon from "@public/favicon.ico";
import MobileNavigationBar from "@components/mobile-navigation-bar";
import NavigationBarItem from "@components/navigation-bar-item";
import SubNavigationBar from "@components/sub-navigation-bar";

export default function NavigationBar() {
  return (
    <nav className="flex flex-wrap items-center justify-between">
      <Link href="/">
        <Image className="w-6 h-6 shadow-lg" src={Favicon} alt="Favicon" width={50} height={50} />
      </Link>
      <MobileNavigationBar />
      <ul className="items-center hidden gap-10 md:flex">
        <li>
          <NavigationBarItem url="/portfolio" aria-label="Portfolio">
            Portfolio
          </NavigationBarItem>
        </li>
        <li>
          <NavigationBarItem url="/blog" aria-label="Blog">
            Blog
          </NavigationBarItem>
        </li>
        <li>
          <NavigationBarItem url="/uses" aria-label="Uses">
            Uses
          </NavigationBarItem>
        </li>
        {/*<li className="relative">
          <SubNavigationBar />
        </li>*/}
      </ul>
    </nav>
  );
}
