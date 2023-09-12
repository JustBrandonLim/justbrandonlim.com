import { allPosts } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import MDX from "@components/mdx/mdx";
import BackToPostsButton from "@components/posts/post/back-to-posts-button";
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
    alternates: {
      canonical: `/posts/${params.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      locale: "en_SG",
      url: `/posts/${params.slug}`,
      images: [
        {
          url: `/api/image?title=${post.title}&subTitle=@JustBrandonLim`,
          alt: `${post.title} | JustBrandonLim`,
        },
      ],
      publishedTime: post.date,
      authors: ["JustBrandonLim"],
    },
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
        <h2>{new Date(post.date).toLocaleString("en-SG", { day: "numeric", month: "long", year: "numeric" })}</h2>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      <article className="prose-sm prose prose-custom max-w-none dark:prose-invert prose-code:font-jetbrains-mono">
        <MDX code={post.body.code} />
      </article>

      <hr className="border-gray-200 dark:border-gray-800" />

      <BackToPostsButton />
    </section>
  );
}
