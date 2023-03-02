import Label from "@components/label";

type PortfolioCard = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
};

export default function PortfolioCard(props: PortfolioCard) {
  return (
    <div className="flex flex-col items-start gap-5 p-5 bg-white border rounded-lg shadow-lg border-slate-200">
      <h3 className="text-lg font-bold text-black">{props.title}</h3>
      <p>{props.description}</p>
      <div className="flex flex-col items-start gap-5 mt-auto">
        {props.github && (
          <a
            className="flex items-center justify-between gap-5 p-3 text-white duration-150 ease-in-out bg-indigo-700 rounded-lg hover:bg-indigo-700/80 transform-colors"
            href={props.github}
            aria-label="View on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
        <div className="flex flex-wrap items-center gap-5">
          {props.stack.map((stack, i) => {
            return <Label key={i} text={stack} />;
          })}
        </div>
      </div>
    </div>
  );
}
