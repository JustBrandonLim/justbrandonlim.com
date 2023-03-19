"use client";

import { useState, useEffect } from "react";
import NavigationBarItem from "@components/navigation-bar-item";

export default function MobileNavigationBar() {
  const [isOpened, setIsOpened] = useState(false);

  function handleGlobalClick() {
    setIsOpened(false);
    document.removeEventListener("click", handleGlobalClick);
  }

  useEffect(() => {
    if (isOpened) document.addEventListener("click", handleGlobalClick);
  }, [isOpened]);

  return (
    <>
      <button
        className="text-black md:hidden"
        aria-label={isOpened ? "Close Navigation Bar" : "Open Navigation Bar"}
        onClick={() => setIsOpened(!isOpened)}
      >
        {isOpened ? (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <title>Close Navigation Bar</title>
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <title>Open Navigation Bar</title>
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {isOpened && (
        <ul className="absolute flex flex-col gap-10 p-5 bg-white border rounded-lg shadow-lg md:hidden top-20 right-5 border-slate-200">
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
          {/*<hr />
          <li>
            <NavigationBarItem url="/links" aria-label="Links">
              Links
            </NavigationBarItem>
      </li>*/}
        </ul>
      )}
    </>
  );
}
