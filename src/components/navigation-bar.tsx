import NavigationBarItem from "@components/navigation-bar-item";

interface NavigationBar {
  navigationItems: {
    title: string;
    href: string;
  }[];
}

export default function NavigationBar(props: NavigationBar) {
  return (
    <ul className="hidden md:flex md:items-center md:gap-8">
      {props.navigationItems.map((navigationItem, i) => {
        return (
          <li key={i}>
            <NavigationBarItem title={navigationItem.title} href={navigationItem.href} />
          </li>
        );
      })}
    </ul>
  );
}
