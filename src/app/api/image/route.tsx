import * as fs from "fs";
import * as path from "path";
import * as url from "url";

import type { NextRequest } from "next/server";
import { ImageResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log(process.cwd());
  const interBold = fs.promises.readFile(path.resolve("./public", "./fonts/inter-bold.woff"));
  const interRegular = fs.promises.readFile(path.resolve("./public", "./fonts/inter-regular.woff"));

  const searchParameters = request.nextUrl.searchParams;

  const title = searchParameters.has("title") ? searchParameters.get("title") : "JustBrandonLim";
  const subTitle = searchParameters.has("subTitle") ? searchParameters.get("subTitle") : "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
          color: "white",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "60px", fontWeight: "700", wordBreak: "break-word", textAlign: "center" }}>{title}</h1>
        <h2 style={{ fontSize: "20px", fontWeight: "400", wordBreak: "break-word", textAlign: "center" }}>{subTitle}</h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await interBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Inter",
          data: await interRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
