"use client";

import { useState, useEffect } from "react";
import NavigationMenuItem from "@components/navigation-menu-item";

interface NavigationMenu {
  navigationItems: {
    title: string;
    href: string;
  }[];
}

export default function NavigationMenu(props: NavigationMenu) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function ClickEventListener() {
    setIsOpened(false);
    document.removeEventListener("click", ClickEventListener);
  }

  useEffect(() => {
    if (isOpened) {
      document.addEventListener("click", ClickEventListener);
    }
  }, [isOpened, ClickEventListener]);

  return (
    <div className="relative inline-block md:hidden">
      <button
        className="p-2 transition-colors duration-150 ease-in-out rounded-md dark:hover:bg-gray-800 hover:bg-gray-200"
        aria-label="Toggle Navigation Menu"
        onClick={() => setIsOpened(!isOpened)}
      >
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
          isOpened ? "flex flex-col gap-3 opacity-100" : "hidden opacity-0"
        } transition-opacity z-10 absolute right-0 w-40 border dark:border-gray-800 border-gray-200 rounded-md shadow-md p-5 mt-2 dark:bg-black bg-white`}
      >
        {props.navigationItems.map((navigationItem, i) => {
          return (
            <li key={i}>
              <NavigationMenuItem title={navigationItem.title} href={navigationItem.href} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
