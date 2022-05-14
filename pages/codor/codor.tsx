import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";

interface Card {
  question: string;
  options: string[];
  answer: number;
}

interface Codor {
  pythonCards: Card[];
  javaCards: Card[];
  cppCards: Card[];
}

const Codor: NextPage<Codor> = (codor) => {
  const language = useRouter().query.language;

  //http://localhost:3000/codor?language=python
  return (
    <div className="min-h-screen">
      <section className="container max-w-2xl p-5">
        <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Codor {language}</h1>
        <p className="mb-5 text-slate-300">Codor is a tool that allows beginners learning programming to test their knowledge!</p>
        <p className="mb-5 text-slate-300">To get started, select a programming language below!</p>
        <div className="grid grid-cols-1 gap-5 p-5 mb-5 rounded-lg shadow-lg md:grid-cols-3 bg-zinc-700">
          <button
            className="p-3 transition-colors duration-300 rounded-lg shadow-lg bg-sky-500 hover:bg-sky-400"
            onClick={() => handleStartGame("Python")}
          >
            Python
          </button>
          <button
            className="p-3 transition-colors duration-300 rounded-lg shadow-lg bg-sky-500 hover:bg-sky-400"
            onClick={() => handleStartGame("Java")}
          >
            Java
          </button>
          <button
            className="p-3 transition-colors duration-300 rounded-lg shadow-lg bg-sky-500 hover:bg-sky-400"
            onClick={() => handleStartGame("C++")}
          >
            C++
          </button>
        </div>
        <p className="mb-5 text-slate-300">
          Special thanks to{" "}
          <a
            className="underline text-sky-500 underline-offset-2 hover:text-sky-400"
            href="https://github.com/pangkaho14"
            aria-label="@pangkaho14"
            target="_blank"
            rel="noopener noreferrer"
          >
            @pangkaho14
          </a>{" "}
          for contributing questions.
        </p>
        <p className="text-slate-300">
          Want to contribute more questions? Check out my{" "}
          <a
            className="underline text-sky-500 underline-offset-2 hover:text-sky-400"
            href="https://github.com/JustBrandonLim/justbrandonlim.com/blob/main/README.md"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          for contribution guide.
        </p>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch("http://localhost:3000/api/codor/cards/all");
  const data = await result.json();

  const pythonCards: Card[] = data.pythonCards;
  const javaCards: Card[] = data.javaCards;
  const cppCards: Card[] = data.cppCards;

  //const pythonCards: Card[] = CodorConfig.pythonDecks[(CodorConfig.pythonDecks.length * Math.random()) | 0];
  //const javaCards: Card[] = CodorConfig.javaDecks[(CodorConfig.javaDecks.length * Math.random()) | 0];
  //const cppCards: Card[] = CodorConfig.cppDecks[(CodorConfig.cppDecks.length * Math.random()) | 0];

  return {
    props: {
      pythonCards: pythonCards,
      javaCards: javaCards,
      cppCards: cppCards,
    },
    revalidate: 60,
  };
};

export default Codor;
