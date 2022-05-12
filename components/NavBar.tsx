import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@images/logo.png";

const NavBar: NextPage = () => {
  return (
    <nav className="container max-w-3xl flex p-5 items-center justify-between text-white">
      <Link href="/">
        <a>
          <Image src={Logo} alt="Brandon Lim" width={48} height={48} quality={100} placeholder="blur" />
        </a>
      </Link>
      <ul className="hidden md:flex gap-10">
        <li>
          <Link href="/">
            <a className="hover:text-sky-500">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a className="hover:text-sky-500">Works</a>
          </Link>
        </li>
        <li>
          <a className="hover:text-sky-500" href="mailto:hello@justbrandonlim.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </li>
        <span>|</span>
        <li>
          <a className="hover:text-sky-500" href="https://drive.google.com/" aria-label="Resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
