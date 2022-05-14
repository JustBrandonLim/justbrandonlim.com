import { NextPage } from "next";
import SocialsBar from "@components/SocialsBar";

const Footer: NextPage = () => {
  return (
    <section className="container max-w-3xl p-5">
      <SocialsBar />
      <p className="mb-5 text-center text-white">&copy; {new Date().getFullYear()} Brandon Lim.</p>
      <p className="text-center text-white">All rights reserved.</p>
    </section>
  );
};

export default Footer;
