import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@images/logo.png";
import React from "react";

const NavBar: NextPage = () => {
  const [mobileNavBarOpened, setMobileNavBarOpened] = React.useState<boolean>(false);

  return (
    <nav>
      <div className="container flex items-center justify-between max-w-3xl p-5">
        <Link href="/">
          <a>
            <Image src={Logo} alt="Brandon Lim" layout="fixed" width={50} height={50} quality={100} placeholder="blur" />
          </a>
        </Link>
        <button
          onClick={() => setMobileNavBarOpened(!mobileNavBarOpened)}
          className="inline-block md:hidden"
          aria-label={mobileNavBarOpened ? "Close Navigation Bar" : "Open Navigation Bar"}
        >
          {mobileNavBarOpened ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <ul className="hidden gap-5 md:flex">
          <li>
            <Link href="/">
              <a className="text-white hover:text-sky-500" aria-label="Home">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a className="text-white hover:text-sky-500" aria-label="Works">
                Works
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-white hover:text-sky-500" href="/resume.pdf" aria-label="Resume" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Link>
          </li>
          <li>
            <a
              className="text-white hover:text-sky-500"
              href="mailto:hello@justbrandonlim.com"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
          <span className="text-white">|</span>
          <li>
            <Link href="/codle">
              <a className="text-white hover:text-sky-500" aria-label="Codle">
                Codle
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <aside
        className={`${
          mobileNavBarOpened ? "visible opacity-100" : "invisible opacity-0"
        } transition-all ease-in-out duration-300 rounded-md bg-zinc-700 absolute right-5 z-10 md:hidden p-5 shadow-lg`}
      >
        <ul className="flex flex-col gap-5 md:hidden">
          <li>
            <Link href="/">
              <a className="text-white hover:text-sky-500" aria-label="Home" onClick={() => setMobileNavBarOpened(false)}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a className="text-white hover:text-sky-500" aria-label="Works" onClick={() => setMobileNavBarOpened(false)}>
                Works
              </a>
            </Link>
          </li>
          <li>
            <Link href="/resume.pdf">
              <a
                className="text-white hover:text-sky-500"
                aria-label="Resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileNavBarOpened(false)}
              >
                Resume
              </a>
            </Link>
          </li>
          <li>
            <a
              className="text-white hover:text-sky-500"
              href="mailto:hello@justbrandonlim.com"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileNavBarOpened(false)}
            >
              Contact
            </a>
          </li>
          <hr className="text-white" />
          <li>
            <Link href="/codle">
              <a className="text-white hover:text-sky-500" aria-label="Codle" onClick={() => setMobileNavBarOpened(false)}>
                Codle
              </a>
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default NavBar;
