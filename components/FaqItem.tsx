"use client";

import { useId } from "react";

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
  const answerId = useId();
  const questionId = useId();

  return (
    <div className={`faq-item${isOpen ? " open" : ""}`}>
      <button
        className="faq-q"
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span>{question}</span>
        <span className="plus" aria-hidden="true">
          +
        </span>
      </button>
      <div
        className="faq-a"
        id={answerId}
        role="region"
        aria-hidden={!isOpen}
        inert={!isOpen}
        aria-labelledby={questionId}
      >
        <div className="faq-answer-inner"><p>{answer}</p></div>
      </div>
    </div>
  );
}
