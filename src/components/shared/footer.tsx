import ScrollToTopButton from "@components/shared/components/scroll-to-top-button";
import ToggleThemeButton from "@components/shared/components/toggle-theme-button";

export default function Footer() {
  return (
    <div className="flex items-center justify-between">
      <p className="select-none">&copy; JustBrandonLim</p>
      <div className="flex items-center gap-2">
        <ScrollToTopButton />
        <ToggleThemeButton />
      </div>
    </div>
  );
}
