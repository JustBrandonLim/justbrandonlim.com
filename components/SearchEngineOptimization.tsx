import { NextPage } from "next";
import Head from "next/head";
import SiteConfig from "../site.config";

interface SearchEngineOptimization {
  displayFeaturedOnly?: boolean;
}

const SearchEngineOptimization: NextPage<SearchEngineOptimization> = (searchEngineOptimization) => {
  return (
    <Head>
      <title>Brandon Lim</title>
    </Head>
  );
};

export default SearchEngineOptimization;
