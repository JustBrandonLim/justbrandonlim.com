import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "@components/mdx/components/image";
import CallOut from "@components/mdx/components/call-out";

interface MDX {
  code: string;
}

export default function MDX(props: MDX) {
  const MDXContent = useMDXComponent(props.code);

  return <MDXContent components={{ Image, CallOut }} />;
}
