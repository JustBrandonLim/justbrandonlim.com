"use client";

import { useState, useEffect, Fragment } from "react";
import NavigationMenuItem from "@components/shared/components/navigation-menu-item";

interface NavigationMenu {
  navigationItems: {
    title: string;
    href?: string;
    navigationItems?: {
      title: string;
      href: string;
    }[];
  }[];
}

export default function NavigationMenu(props: NavigationMenu) {
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
    <div className="relative md:hidden">
      <button
        className="inline-flex p-2 transition-colors duration-150 ease-in-out rounded-md dark:hover:bg-gray-800 hover:bg-gray-200"
        aria-label="Toggle Navigation Menu"
        type="button"
        onClick={() => setIsOpened(!isOpened)}
      >
        {isOpened ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      <ul
        className={`${
          isOpened ? "flex flex-col gap-3" : "hidden"
        } z-10 absolute right-0 min-w-[10rem] border dark:border-gray-800 border-gray-200 rounded-md shadow-md p-5 mt-2 dark:bg-black bg-white`}
      >
        {props.navigationItems.map((navigationItem, i) => {
          if (navigationItem.href && !navigationItem.navigationItems) {
            return (
              <li key={i}>
                <NavigationMenuItem title={navigationItem.title} href={navigationItem.href} />
              </li>
            );
          } else if (!navigationItem.href && navigationItem.navigationItems) {
            return navigationItem.navigationItems.map((subNavigationItem, i) => {
              return (
                <Fragment key={i}>
                  {i === 0 && <hr className="border-gray-200 dark:border-gray-800" />}
                  <li>
                    <NavigationMenuItem title={subNavigationItem.title} href={subNavigationItem.href} />
                  </li>
                </Fragment>
              );
            });
          }
        })}
      </ul>
    </div>
  );
}
