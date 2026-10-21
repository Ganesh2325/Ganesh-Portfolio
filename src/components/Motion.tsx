"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/**
 * All motion lives here. Everything is rendered visible in HTML; GSAP only animates *from*
 * hidden states once JS runs, so content survives JS failure. Disabled under reduced motion.
 */
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    let lenis: Lenis | null = null;
    const cleanups: (() => void)[] = [];

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Smooth scrolling, synced with ScrollTrigger
      lenis = new Lenis({ duration: 1.1, anchors: { offset: -72 } });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (t: number) => lenis?.raf(t * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      cleanups.push(() => gsap.ticker.remove(raf));

      // Hero intro
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-hero-word]", { yPercent: 110, duration: 1.3, stagger: 0.06 }, 0.1)
        .from("[data-hero-fade]", { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08 }, 0.55)
        .from("[data-hero-photo]", { clipPath: "inset(100% 0 0 0)", duration: 1.4, ease: "expo.inOut" }, 0.2)
        .from("[data-hero-photo] img", { scale: 1.3, duration: 1.8 }, 0.2);

      // Section headings: word-by-word reveal
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        gsap.from(el.querySelectorAll(".w-inner"), {
          yPercent: 110, duration: 1.1, ease: "expo.out", stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Hairline rules draw in
      gsap.utils.toArray<HTMLElement>("[data-rule]").forEach((el) => {
        gsap.from(el, { scaleX: 0, transformOrigin: "left center", duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 92%" } });
      });

      // Staggered card / row entrances
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.from(group.children, {
          y: 48, autoAlpha: 0, duration: 1, ease: "power3.out", stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 85%" },
        });
      });

      // Single fade-ups
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.from(el, { y: 32, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });

      // Subtle parallax on project images
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
        gsap.fromTo(img, { yPercent: -7 }, {
          yPercent: 7, ease: "none",
          scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Magnetic buttons (fine pointers only)
      if (window.matchMedia("(pointer: fine)").matches) {
        document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
          const move = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
          };
          const leave = () => { xTo(0); yTo(0); };
          el.addEventListener("pointermove", move);
          el.addEventListener("pointerleave", leave);
          cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
        });
      }

      // Layout can shift after web fonts / images load; keep trigger positions accurate.
      let t = 0;
      const refresh = () => { clearTimeout(t); t = window.setTimeout(() => ScrollTrigger.refresh(), 120); };
      document.fonts?.ready.then(refresh);
      const ro = new ResizeObserver(refresh);
      ro.observe(document.body);
      cleanups.push(() => { ro.disconnect(); clearTimeout(t); });

      return () => { cleanups.splice(0).forEach((f) => f()); lenis?.destroy(); lenis = null; };
    });

    return () => mm.revert();
  }, []);
  return null;
}
