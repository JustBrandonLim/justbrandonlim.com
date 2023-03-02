import "./post.css";
import { getAllBlogPosts, getBlogPostByUrl } from "@utilities/blog";
import BrandonLim from "@public/brandon-lim.png";
import Image from "next/image";
import MDX from "@components/blog-post/mdx";

type generateMetadata = {
  params: { slug: string };
};

export async function generateMetadata(props: generateMetadata) {
  const post = getBlogPostByUrl(props.params.slug);

  if (post) return { title: `${post.title} - Brandon Lim`, description: post.description };
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

  if (!post) return <p>An error has occured!</p>;

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
      <article className="max-w-3xl prose prose-lg font-literata prose-slate prose-code:font-jetbrains-mono">
        <MDX code={post.body.code} components={{ Image }} />
      </article>
      <hr />
      <p>Enjoyed reading this article? Share it!</p>
    </section>
  );
}
