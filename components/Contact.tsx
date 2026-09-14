"use client";
import { Send, Mail, Phone, MapPin } from "lucide-react";


import { FormEvent, useEffect, useRef, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";
import { ContactContent } from "@/lib/content";

const MAX_MESSAGE_LENGTH = 2000;
type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Contact({ contact }: { contact: ContactContent }) {
  const subjectRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (subjectRef.current && params.get("referral") === "1") subjectRef.current.value = "Business referral";
    if (
      subjectRef.current &&
      plan &&
      [
        "Upfront launch package",
        "Monthly launch and care plan",
        "Advanced workflow build",
      ].includes(plan)
    ) subjectRef.current.value = `Project inquiry: ${plan}`;
  }, []);
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setSubmitState("submitting");
    setStatusMessage("Sending your message…");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(result?.error || "Unable to send your message.");
      }
      form.reset();
      setMessage("");
      setSubmitState("success");
      setStatusMessage(
        "Thanks — your message was sent. We’ll be in touch shortly.",
      );
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{contact.eyebrow}</div>
          <h2>{contact.heading}</h2>
          <p style={{ color: "var(--text-dim)" }}>{contact.description}</p>
        </div>

        <div className="contact-grid">
          <form
            onSubmit={handleSubmit}
            aria-busy={submitState === "submitting"}
          >
            <h3 className="form-heading">Tell us about your project</h3>
            <p className="form-intro">A few details help us prepare for a useful conversation. Fields marked * are required.</p>
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="websiteCompany">Leave this field blank</label>
              <input
                id="websiteCompany"
                name="websiteCompany"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
            </div>
            <div className="row2">
              <div className="field">
                <label htmlFor="name">Full name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
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
                  autoComplete="email"
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
                  autoComplete="tel"
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
                type="url"
                placeholder="https://example.com"
              />
            </div>

            <div className="field">
              <label htmlFor="subject">Subject *</label>
              <input
                ref={subjectRef}
                id="subject"
                name="subject"
                type="text"
                maxLength={200}
                placeholder="How can we help?"
                required
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

            <button
              type="submit"
              className="btn btn-solid btn-arrow"
              disabled={submitState === "submitting"}
            >
              <Send size={16} aria-hidden="true" />
              {submitState === "submitting" ? "Sending…" : "Send message"}
            </button>

            <p
              className={`form-status${submitState === "error" ? " error" : ""}`}
              role={submitState === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              {statusMessage}
            </p>
          </form>

          <div className="contact-side">
            <div className="contact-card">
              <div className="k">Have a quick question?</div>
              <p>Start a conversation on WhatsApp, or use the form to tell us about your project.</p>
              <a className="contact-whatsapp" href={whatsappUrl(contact.phoneHref)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span>Chat on WhatsApp</span></a>
            </div>
            <div className="contact-next">
              <h3>What happens next?</h3>
              <p>We review your inquiry, then get in touch to discuss the scope, timeline, and right next step. No commitment is needed to start a conversation.</p>
            </div>
            <div className="contact-card">
              <div className="k"><Mail size={16} aria-hidden="true" />Send us an email</div>
              <p>{contact.emailNote}</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="contact-card">
              <div className="k"><Phone size={16} aria-hidden="true" />Give us a call</div>
              <p>{contact.phoneNote}</p>
              <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            </div>
            <div className="contact-card">
              <div className="k"><MapPin size={16} aria-hidden="true" />Where we work</div>
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
