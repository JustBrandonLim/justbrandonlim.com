type SocialIcon = {
  href: string;
  title: string;
  children: React.ReactNode;
};

export default function SocialIcon(props: SocialIcon) {
  return (
    <a
      className="duration-150 ease-in-out fill-slate-600 hover:fill-indigo-700 transform-colors"
      href={props.href}
      aria-label={props.title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}
