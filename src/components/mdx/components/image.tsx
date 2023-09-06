import NextImage from "next/image";

export default function Image(props: any) {
  return <NextImage className="rounded-md shadow-md" alt={props.alt} {...props} />;
}
