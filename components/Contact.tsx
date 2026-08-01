"use client";

import { FormEvent, useState } from "react";
import { ContactContent } from "@/lib/content";

const MAX_MESSAGE_LENGTH = 500;

export default function Contact({ contact }: { contact: ContactContent }) {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your form handler / API route / email service.
    e.currentTarget.reset();
    setMessage("");
    setSubmitted(true);
  }

  return (
    <section className="contact grid-dark" id="contact">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{contact.eyebrow}</div>
          <h2>{contact.heading}</h2>
          <p style={{ color: "var(--text-dim)" }}>{contact.description}</p>
        </div>

        <div className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div className="row2">
              <div className="field">
                <label htmlFor="fname">Full name *</label>
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                  required
                />
              </div>
            </div>

            <div className="row2">
              <div className="field">
                <label htmlFor="phone">Phone number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="company">Company name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="url">Website URL</label>
              <input
                id="url"
                name="url"
                type="text"
                placeholder="https://example.com"
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                maxLength={MAX_MESSAGE_LENGTH}
                placeholder="Tell us the details of your inquiry..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="char-count">
                {message.length}/{MAX_MESSAGE_LENGTH} characters
              </div>
            </div>

            <button type="submit" className="btn btn-solid btn-arrow">
              Send message
            </button>

            {submitted && (
              <p style={{ color: "var(--text-dim)", marginTop: 14, fontSize: 13.5 }}>
                Thanks — we&apos;ll be in touch shortly.
              </p>
            )}
          </form>

          <div className="contact-side">
            <div className="contact-card">
              <div className="k">Send us an email</div>
              <p>{contact.emailNote}</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="contact-card">
              <div className="k">Give us a call</div>
              <p>{contact.phoneNote}</p>
              <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            </div>
            <div className="contact-card">
              <div className="k">Where we work</div>
              <p style={{ marginTop: 10, color: "var(--text)" }}>
                {contact.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
