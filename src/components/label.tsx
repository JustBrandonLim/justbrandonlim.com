type Label = {
  text: string;
};

export default function Label(props: Label) {
  return <div className="p-2 text-xs text-black rounded-lg bg-slate-100">{props.text}</div>;
}
