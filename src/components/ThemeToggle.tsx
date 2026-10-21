"use client";
import Icon from "./Icon";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };
  return (
    <button type="button" onClick={toggle} aria-label="Toggle colour theme" className="ease-site flex h-9 w-9 items-center justify-center rounded-full text-fg hover:bg-bg-alt">
      <Icon name="moon" className="h-[18px] w-[18px] dark:hidden" />
      <Icon name="sun" className="hidden h-[18px] w-[18px] dark:block" />
    </button>
  );
}
