import type { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <section className="container max-w-3xl p-5">
      <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Page Not Found</h1>
      <p className="text-neutral-300">
        Click{" "}
        <Link href="/" aria-label="Home">
          <a className="underline text-sky-500 underline-offset-2 hover:text-sky-400" aria-label="Home">
            here
          </a>
        </Link>{" "}
        to go home.
      </p>
    </section>
  );
};

export default Custom404;
