import {
	ContactConfirmationTemplate,
	ContactEmailData,
	ContactEmailTemplate,
	ContactPlainTextTemplate,
} from "@/content/email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
	name: z.string().min(1, "Name is required").max(100, "Name too long"),
	email: z.string().email("Invalid email address"),
	phone: z.string().max(20, "Phone number too long").optional(),
	company: z.string().max(100, "Company name too long").optional(),
	website: z.string().url("Invalid website URL").optional().or(z.literal("")),
	subject: z.string().min(1, "Subject is required").max(200, "Subject too long"),
	message: z.string().min(1, "Message is required").max(2000, "Message too long"),
});

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		const validationResult = contactSchema.safeParse(body);
		if (!validationResult.success) {
			return NextResponse.json(
				{
					error: "Validation failed",
					details: validationResult.error.issues,
				},
				{ status: 400 },
			);
		}

		const { name, email, phone, company, website, subject, message } = validationResult.data;

		const emailData: ContactEmailData = {
			name,
			email,
			phone,
			company,
			website,
			subject,
			message,
		};

		const emailResult = await resend.emails.send({
			from: "Bridge Stack Studio <contact@bridgestackstudio.com>",
			to: ["contact@bridgestackstudio.com"],
			replyTo: email,
			subject: `Contact Form Submission: ${subject}`,
			html: ContactEmailTemplate(emailData),
			text: ContactPlainTextTemplate(emailData),
		});

		if (emailResult.error) {
			console.error("Resend error:", emailResult.error);
			return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
		}

		try {
			await resend.emails.send({
				from: "Bridge Stack Studio <noreply@bridgestackstudio.com>",
				to: [email],
				subject: "Thank you for contacting us!",
				text: ContactConfirmationTemplate(name),
			});
		} catch (confirmationError) {
			console.warn("Failed to send confirmation email:", confirmationError);
		}

		return NextResponse.json(
			{
				message: "Email sent successfully",
				id: emailResult.data?.id,
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error("Contact form error:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
