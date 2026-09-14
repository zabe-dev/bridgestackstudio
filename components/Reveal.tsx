"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/**
 * Wraps any element and adds the `in` class once it scrolls into view.
 * Mirrors the original .reveal / .layer scroll-triggered fade-up.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.animate([{ opacity: 0.5, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 480, easing: "cubic-bezier(.2,.7,.2,1)" });
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
