"use client";

import { useState, useEffect } from "react";
import NavigationBarItem from "@components/navigation-bar-item";

export default function SubNavigationBar() {
  const [isOpened, setIsOpened] = useState(false);

  const handleGlobalClick = () => {
    setIsOpened(false);
    document.removeEventListener("click", handleGlobalClick);
  };

  useEffect(() => {
    if (isOpened) document.addEventListener("click", handleGlobalClick);
  }, [isOpened]);

  return (
    <>
      <button
        className="items-center hidden gap-2 transition-colors duration-150 ease-in-out hover:text-black md:flex"
        aria-label={isOpened ? "Close Sub Navigation Bar" : "Open Navigation Bar"}
        onClick={() => setIsOpened(!isOpened)}
      >
        Others
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpened && (
        <ul className="absolute flex whitespace-nowrap flex-col gap-10 p-5 bg-white border rounded-lg shadow-lg border-slate-200 top-[3.75rem] right-0">
          <li>
            <NavigationBarItem url="/others/advocates" aria-label="Advocates">
              Advocates
            </NavigationBarItem>
          </li>
          <li>
            <NavigationBarItem url="/others/text-bubbles" aria-label="Text Bubbles">
              Text Bubbles
            </NavigationBarItem>
          </li>
        </ul>
      )}
    </>
  );
}
