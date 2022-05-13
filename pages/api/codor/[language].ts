// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Question = {
  question: string;
  options: string[];
  answer: number;
};

type Data = {
  questions: Question[] | null;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const language = req.query.language;

  const pythonQuestions = [
    {
      question: "A list is an ___ sequence of objects.",
      options: ["ordered", "unordered"],
      answer: 0,
    },
    {
      question: "How would you convert a string to uppercase?",
      options: ["'JustBrandonLim'.toUpper()", "'JustBrandonLim'.upper()"],
      answer: 1,
    },
  ];

  const javaQuestions = [
    {
      question: "An interface can only contain ___ variables.",
      options: ["static final", "public"],
      answer: 0,
    },
    {
      question: "Multiple inheritance is ___ with interfaces.",
      options: ["not possible", "possible"],
      answer: 1,
    },
  ];

  switch (String(language).toLocaleLowerCase()) {
    default:
      res.status(400).json({
        questions: null,
      });
    case "python":
      res.status(200).json({
        questions: pythonQuestions,
      });
      break;
    case "java":
      res.status(200).json({
        questions: javaQuestions,
      });
      break;
  }
}
