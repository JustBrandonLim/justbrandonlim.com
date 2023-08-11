import Image from "next/image";

export default function RoundedImage(props: any) {
  return <Image className="rounded-md shadow-md" {...props} />;
}
