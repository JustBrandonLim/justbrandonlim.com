import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import PostCard from "@components/post-card";

export const metadata: Metadata = {
  title: "Posts",
  description: "Things that I wrote.",
  alternates: {
    canonical: "/posts",
  },
  openGraph: {
    type: "website",
    title: "Posts",
    description: "Things that I wrote.",
    locale: "en_SG",
    url: "/posts",
    images: [
      {
        url: "/api/image?title=Posts | JustBrandonLim",
        alt: "Posts | JustBrandonLim",
      },
    ],
  },
};

export default function Posts() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Posts</h1>
        <h2>Things that I wrote.</h2>
      </div>

      <div className="flex flex-col gap-10">
        {posts.map((post, i) => {
          return <PostCard key={i} title={post.title} date={format(parseISO(post.date), "LLLL d, yyyy")} href={post.url} aria-label={post.title} />;
        })}
      </div>
    </section>
  );
}
