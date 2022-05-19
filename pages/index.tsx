import type { NextPage } from "next";
import Image from "next/image";
import BrandonLim from "@images/brandon-lim.png";

const Home: NextPage = () => {
  return (
    <>
      <section className="container max-w-3xl p-5">
        <div className="flex flex-col-reverse items-center mb-5 md:justify-between md:items-center md:flex-row">
          <div className="mt-5 md:mt-0">
            <h1 className="text-3xl font-bold text-white md:text-5xl">Brandon Lim</h1>
            <h2 className="text-neutral-300">Developer of Codify.</h2>
            <p className="mt-5 text-neutral-300">I&apos;m an aspiring software engineer based in Singapore.</p>
          </div>
          <Image alt="Brandon Lim" height={150} width={150} src={BrandonLim} className="rounded-full" quality={100} />
        </div>
      </section>
      <section className="container max-w-3xl p-5">
        <h3 className="text-3xl font-bold text-white md:text-5xl">About</h3>
      </section>
      <section className="container max-w-3xl p-5">
        <h3 className="text-3xl font-bold text-white md:text-5xl">Works</h3>
      </section>
    </>
  );
};

export default Home;
