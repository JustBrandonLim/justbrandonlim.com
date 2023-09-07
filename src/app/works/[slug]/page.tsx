import { allWorks } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import { format, parseISO, formatDistance } from "date-fns";
import MDX from "@components/mdx/mdx";
import BackToWorksButton from "@components/works/work/back-to-works-button";
import "../../../styles/code.css";

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
    description: work.description,
    alternates: {
      canonical: `/works/${params.slug}`,
    },
    openGraph: {
      type: "article",
      title: work.title,
      description: work.description,
      locale: "en_SG",
      url: `/works/${params.slug}`,
      images: [
        {
          url: `/api/image?title=${work.title}&subTitle=@JustBrandonLim`,
          alt: `${work.title} | JustBrandonLim`,
        },
      ],
      publishedTime: work.date,
      authors: ["JustBrandonLim"],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const work = allWorks.find((work) => {
    return work.url === `/works/${params.slug}`;
  });

  if (!work) {
    notFound();
  }

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{work.title}</h1>
        <h2>{`${format(parseISO(work.date), "LLLL d, yyyy")} (${formatDistance(parseISO(work.date), new Date(), { addSuffix: true })})`}</h2>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      <article className="prose-sm prose max-w-none dark:prose-invert prose-custom prose-code:font-jetbrains-mono">
        <MDX code={work.body.code} />
      </article>

      <hr className="border-gray-200 dark:border-gray-800" />

      <BackToWorksButton />
    </section>
  );
}
