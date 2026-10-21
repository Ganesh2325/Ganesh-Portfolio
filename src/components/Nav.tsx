"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

export const navItems = [
  ["About", "about"], ["Skills", "skills"], ["Experience", "experience"], ["Projects", "projects"], ["Open Source", "open-source"],
  ["Certificates", "certificates"], ["Education", "education"], ["Contact", "contact"],
] as const;

export default function Nav({ resume }: { resume: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      for (const [, id] of navItems) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50 border-b border-line bg-nav backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1320px] items-center justify-between px-5 sm:px-8">
          <a href="#home" className="display text-2xl font-medium text-fg tracking-tight">MG</a>
          <ul className="label hidden items-center xl:flex">
            {navItems.map(([label, id]) => (
              <li key={id} className="flex items-center">
                <a href={`#${id}`} aria-current={active === id ? "true" : undefined}
                  className={`ease-site whitespace-nowrap px-2 hover:text-fg ${active === id ? "text-fg underline decoration-accent decoration-2 underline-offset-4" : "text-muted"}`}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href={resume} download="Maheshwaram_Ganesh_Resume.pdf" data-magnetic
              className="label hidden items-center gap-2 whitespace-nowrap rounded-full border border-fg px-4 py-2 text-fg transition-colors duration-300 hover:bg-fg hover:text-bg sm:inline-flex">
              <Icon name="download" className="h-3.5 w-3.5" /> Download CV
            </a>
            <ThemeToggle />
            <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" className="p-1 text-fg xl:hidden">
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open}
        className={`ease-site fixed inset-0 z-[60] flex flex-col bg-bg px-6 pb-10 pt-6 xl:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="flex items-center justify-between">
          <span className="label text-muted">Menu</span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="text-fg" tabIndex={open ? 0 : -1}>
            <Icon name="x" className="h-7 w-7" />
          </button>
        </div>
        <ul className="mt-10 flex flex-1 flex-col justify-center gap-2">
          {navItems.map(([label, id]) => (
            <li key={id} className="border-b border-line">
              <a href={`#${id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="flex items-baseline justify-between py-3 text-fg hover:text-accent">
                <span className="display text-4xl">{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={resume} download="Maheshwaram_Ganesh_Resume.pdf" tabIndex={open ? 0 : -1} className="label mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-4 text-bg">
          <Icon name="download" className="h-4 w-4" /> Download CV
        </a>
      </div>
    </>
  );
}
