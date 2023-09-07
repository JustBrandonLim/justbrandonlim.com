"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    ["load", "resize", "scroll"].forEach((event) => {
      window.addEventListener(event, () => {
        if (window.scrollY > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });
  }, []);

  function ScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`${
        isVisible ? "" : "invisible "
      }p-2 inline-flex transition-colors duration-150 ease-in-out rounded-md dark:hover:bg-gray-800 hover:bg-gray-200`}
      aria-label="Back to Top"
      type="button"
      onClick={ScrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
