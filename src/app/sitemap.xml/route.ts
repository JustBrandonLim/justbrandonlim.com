import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@utilities/blog";

export async function GET() {
  const sitemapStart = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const sitemapEnd = `</urlset>`;
  const sitemapStatic = `
    <url>
      <loc>https://justbrandonlim.com/</loc>
      <lastmod>2023-02-27</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/portfolio</loc>
      <lastmod>2023-03-01</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/blog</loc>
      <lastmod>2023-03-01</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/uses</loc>
      <lastmod>2023-03-01</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/resume.pdf</loc>
      <lastmod>2023-03-01</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/others/advocates</loc>
      <lastmod>2023-03-21</lastmod>
    </url>
    <url>
      <loc>https://justbrandonlim.com/others/text-bubbles</loc>
      <lastmod>2023-03-21</lastmod>
    </url>
  `;

  const blogPosts = getAllBlogPosts();

  const sitemapBlogPosts = blogPosts.map((blogPost) => {
    const template = `
      <url>
        <loc>URL</loc>
        <lastmod>DATE</lastmod>
      </url>
    `;

    const url = `https://justbrandonlim.com/blog/${blogPost.slug}`;
    const date = blogPost.date;

    return template.replace("URL", url).replace("DATE", date);
  });

  return new NextResponse(sitemapStart.concat(sitemapStatic, sitemapBlogPosts.join("\n"), sitemapEnd), {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });
}
