import type { NextPage } from "next";
import Link from "next/link";

const FastDrivingPractical: NextPage = () => {
  return (
    <div className="min-h-screen">
      <section className="container max-w-2xl gap-5 p-5">
        <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Fast Driving Practical</h1>
        <p className="text-slate-300">
          Click{" "}
          <Link href="/" aria-label="Home">
            <a className="underline text-sky-500 underline-offset-2 hover:text-sky-400" aria-label="Home">
              here
            </a>
          </Link>{" "}
          to go home.
        </p>
      </section>
    </div>
  );
};

export default FastDrivingPractical;
