import { allPosts } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO, formatDistance, subDays } from "date-fns";

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
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => {
    return post.url === `/posts/${params.slug}`;
  });

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p>{`${format(parseISO(post.date), "LLLL d, yyyy")} (${formatDistance(parseISO(post.date), new Date(), { addSuffix: true })})`}</p>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      <article className="prose md:prose-lg prose-gray max-w-none dark:prose-invert">
        <MDXContent />
      </article>
    </section>
  );
}
