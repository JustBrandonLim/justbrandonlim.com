import type { NextPage } from "next";
import React from "react";

interface Word {
  word: string;
  hint: string;
}

const Codle: NextPage = () => {
  const [words, setWords] = React.useState<Word[] | null>(null);
  const [word, setWord] = React.useState<Word | null>(null);
  const [attempts, setAttempts] = React.useState<number>(0);
  const [wordGuessed, setGuessed] = React.useState<boolean>(false);

  const checkWord = (clickedWord: string) => {
    setAttempts(attempts + 1);
    if (word != null && clickedWord == word.word) setGuessed(true);
  };

  React.useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then((data) => {
        setWords(data.words);
        setWord(data.words[Math.floor(Math.random() * data.words.length)]);
      });
  }, []);

  if (!words)
    return (
      <div className="min-h-screen">
        <section className="container max-w-2xl p-5">
          <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Coda</h1>
          <p className="text-slate-300">We are in the midst of fetching data!</p>
        </section>
      </div>
    );
  else
    return (
      <div className="min-h-screen">
        <section className="container max-w-2xl p-5">
          <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Codle</h1>
          <div className="flex flex-col gap-5 p-5 rounded-lg shadow-lg bg-zinc-700">
            <h4 className="font-bold text-white">How to play?</h4>
            <p className="text-slate-300">Select a programming language from the list of words below to guess!</p>
            <p className="text-slate-300">Attempts: {attempts}</p>
            <div className={`${wordGuessed ? "hidden" : "flex flex-col gap-5"}`}>
              <p className="text-slate-300">Hint: {word ? word.hint : "Something went wrong!"}</p>
              <h4 className="font-bold text-white">Words</h4>
              {words.map((word) => (
                <button className="p-3 rounded-lg shadow-lg bg-sky-500 hover:bg-sky-400" onClick={() => checkWord(word.word)} key={word.word}>
                  {word.word}
                </button>
              ))}
            </div>
            <p className={wordGuessed ? "inline-block text-slate-300" : "hidden"}>Congratulations! You have succesfully guessed the correct word!</p>
          </div>
        </section>
      </div>
    );
};

export default Codle;
