import { useMDXComponent } from "next-contentlayer/hooks";
import RoundedImage from "@components/mdx/rounded-image";

interface MDX {
  code: string;
}

export default function MDX(props: MDX) {
  const MDXContent = useMDXComponent(props.code);

  return <MDXContent components={{ RoundedImage }} />;
}
