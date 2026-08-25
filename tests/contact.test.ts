import { describe, expect, it } from "vitest";
import { contactSchema } from "../lib/contact";
import { ContactEmailTemplate, escapeHtml } from "../content/email";

const validSubmission = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  phone: "555-0100",
  company: "Analytical Engines",
  website: "https://example.com",
  subject: "New website",
  message: "Please contact me.",
  websiteCompany: "",
};

describe("contact submission", () => {
  it("accepts matching form fields", () => {
    expect(contactSchema.safeParse(validSubmission).success).toBe(true);
  });

  it("rejects honeypot submissions and unsafe website protocols", () => {
    expect(contactSchema.safeParse({ ...validSubmission, websiteCompany: "bot" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...validSubmission, website: "javascript:alert(1)" }).success).toBe(false);
  });

  it("escapes user-controlled email HTML", () => {
    expect(escapeHtml('<img src=x onerror="alert(1)">')).toBe(
      "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;",
    );
    const html = ContactEmailTemplate({
      ...validSubmission,
      message: "<script>alert(1)</script>",
    });
    expect(html).not.toContain("<script>alert(1)</script>");
    expect(html).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");
  });
});
