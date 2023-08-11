import type { NextRequest } from "next/server";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const interBold = fetch(new URL("../../../../public/fonts/inter-bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());
  const interRegular = fetch(new URL("../../../../public/fonts/inter-regular.ttf", import.meta.url)).then((res) => res.arrayBuffer());

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
        }}
      >
        <h1 style={{ fontSize: 100, fontWeight: "700" }}>{title}</h1>
        <h2 style={{ fontSize: 30, fontWeight: "400" }}>{subTitle}</h2>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
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
