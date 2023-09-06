import NavigationBarItem from "@components/shared/components/navigation-bar-item";
import NavigationBarMenu from "@components/shared/components/navigation-bar-menu";

interface NavigationBar {
  navigationItems: {
    title: string;
    href?: string;
    navigationItems?: {
      title: string;
      href: string;
    }[];
  }[];
}

export default function NavigationBar(props: NavigationBar) {
  return (
    <ul className="hidden md:flex md:items-center md:gap-8">
      {props.navigationItems.map((navigationItem, i) => {
        if (navigationItem.href && !navigationItem.navigationItems) {
          return (
            <li key={i}>
              <NavigationBarItem title={navigationItem.title} href={navigationItem.href} />
            </li>
          );
        } else if (!navigationItem.href && navigationItem.navigationItems) {
          return <NavigationBarMenu key={i} title={navigationItem.title} navigationItems={navigationItem.navigationItems} />;
        }
      })}
    </ul>
  );
}
