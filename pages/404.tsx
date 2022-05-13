import type { NextPage } from "next";
import Image from "next/image";
import BrandonLim from "@images/brandon-lim.png";
import SocialsBar from "@components/SocialsBar";
import WorksGallery from "@components/WorksGallery";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div className="min-h-screen">
      <section className="container max-w-2xl gap-5 p-5">
        <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Page Not Found</h1>
      </section>
    </div>
  );
};

export default Custom404;
