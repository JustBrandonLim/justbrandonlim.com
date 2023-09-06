"use client";

import { useState, useEffect } from "react";
import NavigationBarMenuItem from "@components/shared/components/navigation-bar-menu-item";

interface NavigationBarMenu {
  title: string;
  navigationItems: {
    title: string;
    href: string;
  }[];
}

export default function NavigationBarMenu(props: NavigationBarMenu) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function ClickEventListener() {
    setIsOpened(false);
  }

  useEffect(() => {
    if (isOpened) {
      document.addEventListener("click", ClickEventListener);
    }

    return () => {
      document.removeEventListener("click", ClickEventListener);
    };
  }, [isOpened]);

  return (
    <li className="relative">
      <button
        className="inline-flex items-center gap-2 p-2 transition-colors rounded-md select-none dark:hover:bg-gray-800 hover:bg-gray-200"
        aria-label="Toggle Navigation Bar Menu"
        type="button"
        onClick={() => setIsOpened(!isOpened)}
      >
        {props.title}
        {isOpened ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      <ul
        className={`${
          isOpened ? "flex flex-col gap-3" : "hidden"
        } z-10 absolute border min-w-[10rem] right-0 dark:border-gray-800 border-gray-200 rounded-md shadow-md p-5 mt-2 dark:bg-black bg-white`}
      >
        {props.navigationItems.map((navigationItem, i) => {
          return <NavigationBarMenuItem key={i} title={navigationItem.title} href={navigationItem.href} />;
        })}
      </ul>
    </li>
  );
}
