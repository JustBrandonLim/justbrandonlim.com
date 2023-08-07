import { allPosts } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import { format, parseISO, formatDistance } from "date-fns";
import MDX from "@components/mdx";
import BackToPostsButton from "@components/back-to-posts-button";
import "../../../styles/code.css";

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => {
    return post.url === `/posts/${params.slug}`;
  });

  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => {
    return post.url === `/posts/${params.slug}`;
  });

  if (!post) {
    notFound();
  }

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <h2>{`${format(parseISO(post.date), "LLLL d, yyyy")} (${formatDistance(parseISO(post.date), new Date(), { addSuffix: true })})`}</h2>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      <article className="prose-sm prose prose-custom max-w-none dark:prose-invert">
        <MDX code={post.body.code} />
      </article>

      <hr className="border-gray-200 dark:border-gray-800" />

      <BackToPostsButton />
    </section>
  );
}
