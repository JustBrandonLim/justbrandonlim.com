import NextImage from "next/image";

export default function Image(props: any) {
  return <NextImage className="my-5 rounded-md shadow-md" alt={props.alt} {...props} />;
}
