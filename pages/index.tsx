import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import ProfilePicture from "@images/profile-picture.png";
import SearchEngineOptimization from "@components/SearchEngineOptimization";
import WorksGallery from "@components/WorksGallery";
import SiteConfig from "../site.config";

interface Work {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

interface HomeProps {
  data: Work[];
}

const Home: NextPage<HomeProps> = (homeProps) => {
  return (
    <>
      <SearchEngineOptimization />
      <section className="container max-w-3xl p-5 mb-10 md:mb-20">
        <div className="flex flex-col-reverse gap-5 md:items-center md:justify-between md:flex-row">
          <div className="md:max-w-lg">
            <h1 className="text-3xl font-bold text-white md:text-5xl">Brandon Lim</h1>
            <h2 className="mb-5 text-neutral-300">I&apos;m an aspiring software engineer based in Singapore.</h2>
            <p className="text-neutral-300">
              I started programming at the young age of 12 when I received my first computer. Today, I am a student at Singapore Institute of
              Technology pursuing my degree in BE in Informations and Communications Technology (Software Engineering).
            </p>
          </div>
          <Image
            alt="Brandon Lim"
            height={150}
            width={150}
            src={ProfilePicture}
            layout="fixed"
            className="rounded-full filter grayscale"
            quality={100}
          />
        </div>
      </section>
      <section className="container max-w-3xl p-5">
        <h3 className="mb-5 text-xl font-bold text-white md:text-3xl">Featured Works</h3>
        <WorksGallery works={homeProps.data} />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const result = await fetch("https://api.github.com/users/" + SiteConfig.socials.github + "/repos?sort=created");
  const data: Work[] = await result
    .json()
    .then((works) => works.filter((work: Work) => work.name === "codify" || work.name === "timetable-grabber-sit"));

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export default Home;
