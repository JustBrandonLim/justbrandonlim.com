import Link from "next/link";

export default function BackToWorksButton() {
  return (
    <Link
      className="inline-flex items-center self-end gap-2 p-2 transition-colors rounded-md select-none dark:hover:bg-gray-800 hover:bg-gray-200"
      href="/works"
      aria-label="Back to Works"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
          clipRule="evenodd"
        />
      </svg>
      Back to Works
    </Link>
  );
}
