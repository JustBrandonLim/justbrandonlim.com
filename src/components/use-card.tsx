interface UseCard {
  title: string;
  product: string;
}

export default function UseCard(props: UseCard) {
  return (
    <div className="flex flex-col gap-2 p-5 border border-gray-200 rounded-md shadow-md dark:border-gray-800">
      <h3 className="font-semibold">{props.title}</h3>
      <p>{props.product}</p>
    </div>
  );
}
