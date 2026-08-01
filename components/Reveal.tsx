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

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
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
