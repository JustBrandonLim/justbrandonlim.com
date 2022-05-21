import type { NextPage } from "next";

interface IconProps {
  href: string;
  "aria-label": string;
  children: React.ReactNode;
}

const Icon: NextPage<IconProps> = (iconProps) => {
  return (
    <a
      className="w-6 h-6 transition-colors duration-300 ease-in-out fill-neutral-300 hover:fill-white text-neutral-300 hover:text-white"
      href={iconProps.href}
      aria-label={iconProps["aria-label"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      {iconProps.children}
    </a>
  );
};

export default Icon;
