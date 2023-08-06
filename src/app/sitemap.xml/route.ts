import { allDocuments } from "contentlayer/generated";
import { NextResponse } from "next/server";

export async function GET() {
  const sitemapStart = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const sitemapEnd = `</urlset>`;
  const sitemapStatic = `
    <url>
      <loc>https://justbrandonlim.com/</loc>
      <lastmod>2023-08-01</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/works</loc>
      <lastmod>2023-08-01</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/posts</loc>
      <lastmod>2023-08-01</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/links</loc>
      <lastmod>2023-08-01</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/uses</loc>
      <lastmod>2023-08-01</lastmod>
    </url>
  `;

  const sitemapDynamic = allDocuments.map((document) => {
    const template = `
      <url>
        <loc>URL</loc>
        <lastmod>DATE</lastmod>
      </url>
    `;

    const url = `https://justbrandonlim.com/${document._raw.flattenedPath}`;
    const date = document.date.replace("T00:00:00.000Z", "");

    return template.replace("URL", url).replace("DATE", date);
  });

  return new NextResponse(sitemapStart.concat(sitemapStatic, sitemapDynamic.join("\n"), sitemapEnd), {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });
}
