import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import PostCard from "@components/posts/post-card";

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
  const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date, "en-SG"));

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Posts</h1>
        <h2>Things that I wrote.</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {posts.map((post, i) => {
          return (
            <PostCard
              key={i}
              title={post.title}
              date={new Date(post.date).toLocaleString("en-SG", { day: "numeric", month: "long", year: "numeric" })}
              href={post.url}
              aria-label={post.title}
            />
          );
        })}
      </div>
    </section>
  );
}
