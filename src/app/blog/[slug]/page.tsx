import "./post.css";
import type { Metadata } from "next";
import { getAllBlogPosts, getBlogPostByUrl } from "@utilities/blog";
import BrandonLim from "@public/brandon-lim.png";
import Image from "next/image";
import MDX from "@components/blog-post/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";

type generateMetadata = {
  params: { slug: string };
};

export async function generateMetadata(props: generateMetadata): Promise<Metadata | undefined> {
  const post = getBlogPostByUrl(props.params.slug);

  if (post)
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        type: "article",
        title: post.title,
        url: `https://justbrandonlim.com/blog/${post.slug}`,
        description: post.description,

        images: [{ url: "https://justbrandonlim.com/brandon-lim.png" }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [{ url: "https://justbrandonlim.com/brandon-lim.png" }],
      },
    };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map((post) => {
    return { slug: post.slug };
  });
}

type Post = {
  params: { slug: string };
};

export default function Post(props: Post) {
  const post = getBlogPostByUrl(props.params.slug);

  if (!post) notFound();

  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-black md:text-4xl">{post.title}</h1>
      <div className="flex flex-wrap items-center gap-5">
        <Image className="rounded-full shadow-lg" src={BrandonLim} alt="Brandon Lim" width={50} height={50} />
        <div>
          <p className="font-bold text-black">Brandon Lim Jing Zhi</p>
          <p>{post.date}</p>
        </div>
      </div>
      <p>{post.description}</p>
      <hr />
      <article className="max-w-3xl prose prose-lg font-literata prose-slate prose-code:font-fira-code">
        <MDX code={post.body.code} components={{ Image }} />
      </article>
      <hr />
      <Link
        className="flex items-center self-start gap-5 p-3 text-white duration-150 ease-in-out bg-indigo-700 rounded-lg hover:bg-indigo-600 transform-colors"
        href="/blog"
        aria-label="Back to Blog"
      >
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <title>Back to Blog</title>
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        Back to Blog
      </Link>
    </section>
  );
}
