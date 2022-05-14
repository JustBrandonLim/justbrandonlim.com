import type { NextPage } from "next";
import { useRouter } from "next/router";

const CodorGame: NextPage = () => {
  const language = useRouter().query.language;

  return (
    <div className="min-h-screen">
      <section className="container max-w-2xl gap-5 p-5">
        <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Page Not Found</h1>
        <p className="text-slate-300">{language}</p>
      </section>
    </div>
  );
};

export default CodorGame;
