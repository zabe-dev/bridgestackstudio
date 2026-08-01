"use client";

import { useRef } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item${isOpen ? " open" : ""}`}>
      <button className="faq-q" aria-expanded={isOpen} onClick={onToggle}>
        <span>{question}</span>
        <span className="plus">+</span>
      </button>
      <div
        className="faq-a"
        ref={answerRef}
        style={{
          maxHeight: isOpen ? `${answerRef.current?.scrollHeight ?? 300}px` : "0px",
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
