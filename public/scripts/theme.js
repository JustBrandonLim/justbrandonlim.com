if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else if (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
