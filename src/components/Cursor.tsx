"use client";
import { useEffect, useRef } from "react";

/** A soft ring that trails the (still visible) native cursor. Fine pointers + motion-OK only. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      el.style.opacity = "1";
      el.dataset.active = String(!!(e.target as Element)?.closest?.("a,button,[data-magnetic]"));
    };
    const hide = () => { el.style.opacity = "0"; };
    const loop = () => {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", hide);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", hide); };
  }, []);
  return <div ref={ref} className="cursor-ring" aria-hidden="true" />;
}
