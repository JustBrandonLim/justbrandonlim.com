import type { NextApiRequest, NextApiResponse } from "next";
import CodorConfig from "../../../../codor.config";

interface Card {
  question: string;
  options: string[];
  answer: number;
}

type Data = {
  pythonCards?: Card[];
  javaCards?: Card[];
  cppCards?: Card[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const language: string = String(req.query.language).toLowerCase();

  if (language === "all")
    res.status(200).json({
      pythonCards: CodorConfig.pythonDecks[(CodorConfig.pythonDecks.length * Math.random()) | 0],
      javaCards: CodorConfig.javaDecks[(CodorConfig.javaDecks.length * Math.random()) | 0],
      cppCards: CodorConfig.cppDecks[(CodorConfig.cppDecks.length * Math.random()) | 0],
    });

  if (language === "python") res.status(200).json({ pythonCards: CodorConfig.pythonDecks[(CodorConfig.pythonDecks.length * Math.random()) | 0] });

  if (language === "java") res.status(200).json({ javaCards: CodorConfig.javaDecks[(CodorConfig.javaDecks.length * Math.random()) | 0] });

  if (language === "cpp") res.status(200).json({ cppCards: CodorConfig.cppDecks[(CodorConfig.cppDecks.length * Math.random()) | 0] });
}
