type SocialLink = {
  href: string;
  title: string;
  children: React.ReactNode;
};

export default function SocialLink(props: SocialLink) {
  return (
    <a
      className="flex items-center justify-between gap-5 p-3 text-white duration-150 ease-in-out bg-indigo-700 rounded-lg shadow-lg hover:bg-indigo-700/80 transform-colors"
      href={props.href}
      aria-label={props.title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center gap-2 fill-white">{props.children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path
          fillRule="evenodd"
          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}
