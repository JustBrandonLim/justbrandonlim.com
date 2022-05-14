import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  description: string;
  version: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    name: "Codor",
    description: "Codor is a tool that allows beginners learning programming to test their knowledge!",
    version: "0.1",
  });
}
