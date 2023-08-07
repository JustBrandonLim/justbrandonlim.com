import { useMDXComponent } from "next-contentlayer/hooks";

interface MDX {
  code: string;
}

export default function MDX(props: MDX) {
  const MDXContent = useMDXComponent(props.code);

  return <MDXContent components={undefined} />;
}
