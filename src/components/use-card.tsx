interface UseCard {
  title: string;
  items: {
    subtitle: string;
    contents: string[];
  }[];
}

export default function UseCard(props: UseCard) {
  return (
    <div className="flex flex-col items-start gap-5 p-5 bg-white border rounded-lg shadow-lg border-slate-200">
      <h3 className="text-lg font-bold text-black">{props.title}</h3>
      {props.items.map((item, i) => {
        return (
          <div key={i}>
            <p>{item.subtitle}</p>
            <ul className="list-disc list-inside">
              {item.contents.map((content, i) => {
                return <li key={i}>{content}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
