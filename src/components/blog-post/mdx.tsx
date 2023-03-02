import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";

type MDX = {
  code: string;
  components?: MDXComponents;
};

export default function MDX(props: MDX) {
  const MDX = useMDXComponent(props.code);

  return <MDX components={props.components} />;
}
