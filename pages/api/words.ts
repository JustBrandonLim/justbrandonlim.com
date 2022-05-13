// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Word = {
  word: string;
  hint: string;
};

type Data = {
  words: Word[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const words = [
    { word: "C#", hint: "Designed by Mads Torgersen and Anders Hejlsberg at Microsoft." },
    { word: "TypeScript", hint: "Developed and maintained by Microsoft." },
    { word: "C++", hint: "Created by Bjarne Stroustrup." },
    { word: "JavaScript", hint: "Designed by Brendan Eich." },
    { word: "Python", hint: "Designed by Guido van Rossum." },
    { word: "Java", hint: "Designed by James Gosling." },
  ];

  res.status(200).json({
    words: words,
  });
}
