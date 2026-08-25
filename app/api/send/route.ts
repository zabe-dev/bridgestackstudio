import { ContactConfirmationTemplate, ContactEmailTemplate, ContactPlainTextTemplate } from "@/content/email";
import { contactSchema } from "@/lib/contact";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const attempts = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key: string, now = Date.now()) {
  if (attempts.size > 1000) {
    for (const [ip, attempt] of attempts) {
      if (attempt.resetAt <= now) attempts.delete(ip);
    }
  }
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Request origin is not allowed" }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request is too large" }, { status: 413 });
  }
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429, headers: { "Retry-After": String(RATE_WINDOW_MS / 1000) } },
    );
  }

  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request is too large" }, { status: 413 });
    }
    const validationResult = contactSchema.safeParse(JSON.parse(rawBody));
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0]?.message || "Validation failed" },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Contact service is temporarily unavailable" }, { status: 503 });
    }

    const { name, email, phone, company, website, subject, message } = validationResult.data;
    const emailData = { name, email, phone, company, website, subject, message };
    const resend = new Resend(apiKey);
    const emailResult = await resend.emails.send({
      from: "Bridge Stack Studio <contact@bridgestackstudio.com>",
      to: ["contact@bridgestackstudio.com"],
      replyTo: emailData.email,
      subject: `Contact Form Submission: ${emailData.subject}`,
      html: ContactEmailTemplate(emailData),
      text: ContactPlainTextTemplate(emailData),
    });
    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    const confirmationResult = await resend.emails.send({
      from: "Bridge Stack Studio <noreply@bridgestackstudio.com>",
      to: [emailData.email],
      subject: "Thank you for contacting us!",
      text: ContactConfirmationTemplate(emailData.name),
    });
    if (confirmationResult.error) console.warn("Failed to send confirmation email:", confirmationResult.error);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
