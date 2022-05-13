import type { NextPage } from "next";
import Image from "next/image";
import BrandonLim from "@images/brandon-lim.png";
import SocialsBar from "@components/SocialsBar";
import WorksGallery from "@components/WorksGallery";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <section className="container flex flex-col items-center max-w-2xl gap-5 p-5 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold text-center text-white md:text-5xl">Brandon Lim</h1>
          <p className="text-center text-slate-300">I&apos;m an aspiring software engineer based in Singapore.</p>
          <SocialsBar />
        </div>
        <Image className="rounded-full" src={BrandonLim} alt="Brandon Lim" layout="fixed" width={150} height={150} quality={100} priority />
      </section>
      <section className="container max-w-2xl p-5">
        <p className="mb-5 text-slate-300">
          Hello! My name is Brandon and I love everything about programming. My passion in programming started way back in 2011 at the age of 12 when
          I got my first computer.
        </p>
        <p className="mb-5 text-slate-300">
          Today, I am the proud co-founder of Beeware, a software solutions start-up. I am also currently pursuing my degree at Singapore Institute of
          Technology, majoring in BE in Informations and Communications Technology (Software Engineering).
        </p>
      </section>
      <section className="container max-w-2xl gap-5 p-5">
        <h2 className="mb-5 text-xl font-bold text-white md:text-3xl">Featured Works</h2>
        <WorksGallery displayCount={2} />
      </section>
    </div>
  );
};

export default Home;
