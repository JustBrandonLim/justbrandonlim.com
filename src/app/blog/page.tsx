import type { Metadata } from "next";
import { getAllBlogPosts } from "@utilities/blog";
import BlogPostCard from "@components/blog-post-card";

export const metadata: Metadata = {
  title: "Blog - Brandon Lim Jing Zhi",
  description: "Explore my blog where I share my thoughts, ideas and experiences with the world.",
};

export default function Blog() {
  const blogPosts = getAllBlogPosts();

  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-black md:text-4xl">Blog</h1>
      <p>Explore my blog where I share my thoughts, ideas and experiences with the world.</p>
      <div className="grid grid-cols-1 gap-5 auto-rows-fr">
        {blogPosts.map((blogPost, i) => {
          return (
            <BlogPostCard
              key={i}
              title={blogPost.title}
              date={blogPost.date}
              description={blogPost.description}
              href={blogPost.slug}
              tags={blogPost.tags}
            />
          );
        })}
      </div>
    </section>
  );
}
