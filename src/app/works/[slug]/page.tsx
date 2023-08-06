import { allWorks } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO, formatDistance, subDays } from "date-fns";

export async function generateStaticParams() {
  return allWorks.map((work) => ({ slug: work._raw.flattenedPath }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const work = allWorks.find((work) => {
    return work.url === `/works/${params.slug}`;
  });

  if (!work) {
    return;
  }

  return {
    title: work.title,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const work = allWorks.find((work) => {
    return work.url === `/works/${params.slug}`;
  });

  if (!work) {
    notFound();
  }

  const MDXContent = useMDXComponent(work.body.code);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{work.title}</h1>
        <p>{`${format(parseISO(work.date), "LLLL d, yyyy")} (${formatDistance(parseISO(work.date), new Date(), { addSuffix: true })})`}</p>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      <article className="prose max-w-none dark:prose-invert">
        <MDXContent />
      </article>
    </section>
  );
}
