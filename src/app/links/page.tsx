import type { Metadata } from "next";
import LinkCard from "@components/link-card";

export const metadata: Metadata = {
  title: "Links",
  description: "Things that I scroll.",
};

export default function Links() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Links</h1>
        <h2>Things that I scroll.</h2>
      </div>

      <div className="flex flex-col gap-10">
        <LinkCard platform="GitHub" handle="@JustBrandonLim" href="https://www.github.com/JustBrandonLim" aria-label="JustBrandonLim on GitHub" />
        <LinkCard
          platform="LeetCode"
          handle="@JustBrandonLim"
          href="https://www.leetcode.com/JustBrandonLim"
          aria-label="JustBrandonLim on LeetCode"
        />
        <LinkCard
          platform="LinkedIn"
          handle="@brandonlimjingzhi"
          href="https://www.linkedin.com/in/brandonlimjingzhi/"
          aria-label="JustBrandonLim on LinkedIn"
        />
        <LinkCard platform="𝕏" handle="@JustBrandonLim" href="https://www.x.com/@JustBrandonLim" aria-label="JustBrandonLim on X" />
        <LinkCard platform="YouTube" handle="@JustBrandonLim" href="https://www.youtube.com/@JustBrandonLim" aria-label="JustBrandonLim on YouTube" />
        <LinkCard platform="Instagram" handle="@___bljz" href="https://www.instagram.com/___bljz" aria-label="JustBrandonLim on Instagram" />
      </div>

      {/*<p className="text-justify">Work in progress.</p>*/}
    </section>
  );
}
