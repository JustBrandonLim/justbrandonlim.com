import { NextPage } from "next";
import Head from "next/head";
import SiteConfig from "../site.config";

interface SearchEngineOptimizationProps {
  displayFeaturedOnly?: boolean;
}

const SearchEngineOptimization: NextPage<SearchEngineOptimizationProps> = (searchEngineOptimizationProps) => {
  return (
    <Head>
      <title>Brandon Lim</title>
    </Head>
  );
};

export default SearchEngineOptimization;
