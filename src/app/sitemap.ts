import type { MetadataRoute } from "next";
import { allWorks, allPosts } from "contentlayer/generated";

export default function Sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: "https://justbrandonlim.com",
      lastModified: new Date("2023-08-01").toISOString().split("T")[0],
    },
    {
      url: "https://justbrandonlim.com/works",
      lastModified: new Date("2023-08-01").toISOString().split("T")[0],
    },
    {
      url: "https://justbrandonlim.com/posts",
      lastModified: new Date("2023-08-01").toISOString().split("T")[0],
    },
    {
      url: "https://justbrandonlim.com/links",
      lastModified: new Date("2023-08-01").toISOString().split("T")[0],
    },
    {
      url: "https://justbrandonlim.com/uses",
      lastModified: new Date("2023-08-01").toISOString().split("T")[0],
    },
  ];

  const works = allWorks.map((work) => {
    return { url: `https://justbrandonlim.com/${work._raw.flattenedPath}`, lastModified: work.date.split("T")[0] };
  });

  const posts = allPosts.map((post) => {
    return { url: `https://justbrandonlim.com/${post._raw.flattenedPath}`, lastModified: post.date.split("T")[0] };
  });

  return [...routes, ...works, ...posts];
}
