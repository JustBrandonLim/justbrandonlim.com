import type { NextPage } from "next";
import React from "react";

type Question = {
  question: string;
  options: string[];
  answer: number;
};

const Codor: NextPage = () => {
  const [language, setLanguage] = React.useState<string | null>(null);
  const [questions, setQuestions] = React.useState<Question[] | null>(null);
  const [questionIndex, setQuestionIndex] = React.useState<number>(0);
  const [selectedAnswers, setSelectedAnswer] = React.useState<number[]>([]);
  const [score, setScore] = React.useState<number>(0);

  const getQuestions = (language: string) => {
    setLanguage(language);
    fetch("/api/codor/" + language)
      .then((res) => res.json())
      .then((data) => {
        setScore(0);
        setQuestionIndex(0);
        setSelectedAnswer([]);
        setQuestions(data.questions);
      });
  };

  const handleSelectOption = (currentQuestionIndex: number, selectedOptionIndex: number) => {
    setSelectedAnswer([(selectedAnswers[currentQuestionIndex] = selectedOptionIndex)]);
    setSelectedAnswer([...selectedAnswers]);
  };

  const handlePreviousQuestion = () => {
    if (questions && questionIndex != 0) setQuestionIndex((questionIndex) => questionIndex - 1);
  };

  const handleNextQuestion = () => {
    if (questions && questionIndex < questions.length - 1) setQuestionIndex((questionIndex) => questionIndex + 1);
  };

  const handleSubmit = () => {
    selectedAnswers.forEach((selectedAnswer, selectedAnswerIndex) => {
      if (questions && selectedAnswer == questions[selectedAnswerIndex].answer) setScore((score) => score + 1);
    });
    setLanguage("Score");
  };

  const handleShare = () => {
    if (questions)
      navigator.clipboard.writeText(
        "I scored " + score + " out of " + questions.length + " on Codor!\nTry it at https://www.justbrandonlim.com/codor now!"
      );

    setQuestions(null);
  };

  if (!questions)
    return (
      <div className="min-h-screen">
        <section className="container max-w-2xl p-5">
          <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Codor</h1>
          <p className="mb-5 text-slate-300">Codor is a tool that allows beginners learning programming to test their knowledge!</p>
          <p className="mb-5 text-slate-300">To get started, select a language to test yourself below!</p>
          <div className="grid grid-cols-2 gap-5 p-5 mb-5 rounded-lg shadow-lg md:grid-cols-3 bg-zinc-700">
            <button
              className="p-3 transition-colors duration-300 rounded-lg shadow-lg bg-sky-500 hover:bg-sky-400"
              onClick={() => getQuestions("Python")}
            >
              Python
            </button>
            <button
              className="p-3 transition-colors duration-300 rounded-lg shadow-lg bg-sky-500 hover:bg-sky-400"
              onClick={() => getQuestions("Java")}
            >
              Java
            </button>
            <button
              className="p-3 transition-colors duration-300 rounded-lg shadow-lg bg-sky-500 hover:bg-sky-400"
              onClick={() => getQuestions("C++")}
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
            </a>
            ,{" "}
            <a
              className="underline text-sky-500 underline-offset-2 hover:text-sky-400"
              href="https://github.com/Medioec"
              aria-label="@Medioec"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Medioec
            </a>
            ,{" "}
            <a
              className="underline text-sky-500 underline-offset-2 hover:text-sky-400"
              href="https://github.com/ministic2001"
              aria-label="@ministic2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ministic2001
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
  else if (language == "Score")
    return (
      <div className="min-h-screen">
        <section className="container max-w-2xl p-5">
          <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Codor</h1>
          <p className="mb-5 text-slate-300">Codor is a tool that allows beginners learning programming to test their knowledge!</p>
          <p className="mb-5 text-slate-300">You have completed all the questions!</p>
          <p className="mb-5 text-slate-300">Check your results below!</p>
          <div className="flex flex-col items-stretch gap-5 p-5 mb-5 rounded-lg shadow-lg bg-zinc-700">
            <h4 className="font-bold text-white">
              You scored {score} out of {questions.length}!
            </h4>
            <p className="text-slate-300">Well done!</p>
          </div>
          <div className="flex flex-col items-stretch gap-5 md:flex-row">
            <button
              className="p-3 transition-colors duration-300 bg-red-500 rounded-lg shadow-lg hover:bg-red-400"
              onClick={() => setQuestions(null)}
            >
              Quit
            </button>
            <button className="p-3 transition-colors duration-300 bg-green-500 rounded-lg shadow-lg hover:bg-green-400" onClick={() => handleShare()}>
              Share
            </button>
          </div>
        </section>
      </div>
    );
  else
    return (
      <div className="min-h-screen">
        <section className="container max-w-2xl p-5">
          <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">Codor</h1>
          <p className="mb-5 text-slate-300">Codor is a tool that allows beginners learning programming to test their knowledge!</p>
          <p className="mb-5 text-slate-300">You have selected {language}!</p>
          <p className="mb-5 text-slate-300">Please answer all the questions correctly!</p>
          <div className="flex flex-col items-stretch gap-5 p-5 mb-5 rounded-lg shadow-lg bg-zinc-700">
            <h4 className="font-bold text-white">
              Q{questionIndex + 1}. {questions[questionIndex].question}
            </h4>
            {questions[questionIndex].options.map((option, optionIndex) => (
              <button
                className={`p-3 text-left transition-colors duration-300 rounded-lg shadow-lg ${
                  selectedAnswers[questionIndex] == optionIndex ? `bg-sky-400 hover:bg-sky-400` : `bg-zinc-300 hover:bg-sky-400`
                }`}
                onClick={() => handleSelectOption(questionIndex, optionIndex)}
                key={optionIndex}
              >
                {optionIndex + 1}. {option}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-stretch gap-5 md:flex-row">
            <button
              className="p-3 transition-colors duration-300 bg-red-500 rounded-lg shadow-lg hover:bg-red-400"
              onClick={() => setQuestions(null)}
            >
              Quit
            </button>
            <button
              className="flex-1 p-3 transition-colors duration-300 bg-green-500 rounded-lg shadow-lg hover:bg-green-400"
              onClick={() => handlePreviousQuestion()}
            >
              Previous
            </button>
            <button
              className="flex-1 p-3 transition-colors duration-300 bg-green-500 rounded-lg shadow-lg hover:bg-green-400"
              onClick={() => (questionIndex < questions.length - 1 ? handleNextQuestion() : handleSubmit())}
            >
              {questionIndex < questions.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </section>
      </div>
    );
};

export default Codor;
