export interface ContactEmailData {
	name: string;
	email: string;
	phone?: string;
	company?: string;
	website?: string;
	subject: string;
	message: string;
}

export const escapeHtml = (value: string | undefined) =>
	(value ?? "")
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");

export const ContactEmailTemplate = ({
	name,
	email,
	phone,
	company,
	website,
	subject,
	message,
}: ContactEmailData) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>New Contact Form Submission</title>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

	body {
		font-family: 'Poppins', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		line-height: 1.6;
		color: #2c3e50;
		margin: 0;
		padding: 0;
		background-color: #f8fafc;
		width: 100% !important;
	}
	.email-wrapper {
		width: 100%;
		padding: 20px 0;
		background-color: #f8fafc;
	}
	.email-container {
		background: #ffffff;
		overflow: hidden;
		box-shadow: 0 8px 32px rgba(0,0,0,0.08);
		max-width: 600px;
		margin: 0 auto;
		border: 1px solid #e2e8f0;
	}
	.header {
		background: linear-gradient(135deg, #1e3a8a, #3b82f6);
		color: #ffffff;
		padding: 40px 20px;
		text-align: center;
		position: relative;
	}
	.header h1 {
		margin: 0 0 10px 0;
		font-size: 28px;
		font-weight: 600;
		color: #ffffff;
		font-family: 'Poppins', sans-serif;
		width: 420px;
		margin-left: auto;
		margin-right: auto;
	}
	.mail-icon {
		width: 80px;
		height: 60px;
		background: linear-gradient(135deg, #f59e0b, #f97316);
		margin: 0 auto 20px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 16px rgba(0,0,0,0.15);
	}
	.mail-icon::before {
		content: '✓';
		color: #ffffff;
		font-size: 24px;
		font-weight: bold;
	}
	.header h1 {
		margin: 0 0 10px 0;
		font-size: 28px;
		font-weight: 600;
		color: #ffffff;
		font-family: 'Poppins', sans-serif;
		width: 420px;
		margin-left: auto;
		margin-right: auto;
	}
	.header p {
		margin: 0;
		font-size: 16px;
		color: #ffffff;
		opacity: 0.9;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}
	.content {
		padding: 35px;
		background: #fff;
	}
	.intro-text {
		color: #64748b;
		margin-bottom: 30px;
		text-align: center;
		font-size: 14px;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}
	.intro-link {
		color: #3b82f6;
		text-decoration: none;
		font-weight: 500;
	}
	.intro-link:hover {
		text-decoration: underline;
		color: #1e40af;
	}
	.field-row {
		display: flex;
		margin-bottom: 28px;
		align-items: flex-start;
		padding: 20px;
		background: #f8fafc;
		border-left: 4px solid #3b82f6;
	}
	.field-icon {
		width: 40px;
		color: #64748b;
		font-size: 18px;
		margin-right: 18px;
		margin-top: 2px;
		flex-shrink: 0;
	}
	.field-content {
		flex: 1;
	}
	.field-label {
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 6px;
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.8px;
		font-family: 'Poppins', sans-serif;
	}
	.field-value {
		color: #475569;
		font-size: 15px;
		line-height: 1.5;
		word-break: break-word;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}
	.field-value a {
		color: #3b82f6;
		text-decoration: none;
		font-weight: 500;
	}
	.field-value a:hover {
		text-decoration: underline;
		color: #1e40af;
	}
	.message-value {
		white-space: pre-wrap;
		line-height: 1.6;
	}
	.footer {
		background: linear-gradient(135deg, #374151, #4b5563);
		color: #ffffff;
		text-align: center;
		padding: 25px;
		font-size: 14px;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
	}
	/* Mobile responsiveness */
	@media (max-width: 600px) {
		.email-wrapper {
			padding: 10px;
		}
		.header {
			padding: 30px 15px;
		}
		.header h1 {
			font-size: 24px;
			width: auto;
		}
		.content {
			padding: 25px;
		}
		.field-row {
			flex-direction: column;
			padding: 15px;
		}
		.field-icon {
			margin-bottom: 8px;
			margin-right: 0;
		}
	}
</style>
</head>
<body>
<div class="email-wrapper">
	<div class="email-container">
		<div class="header">
			<h1>You have received a message from your website</h1>
		</div>

		<div class="content">
			<div class="field-row">
				<div class="field-icon">👤</div>
				<div class="field-content">
					<div class="field-label">Full Name</div>
						<div class="field-value">${escapeHtml(name)}</div>
				</div>
			</div>

			<div class="field-row">
				<div class="field-icon">✉️</div>
				<div class="field-content">
					<div class="field-label">Email Address</div>
					<div class="field-value">
							<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
					</div>
				</div>
			</div>

			<div class="field-row">
				<div class="field-icon">📞</div>
				<div class="field-content">
					<div class="field-label">Phone Number</div>
					<div class="field-value">
							<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>
					</div>
				</div>
			</div>

			${
				company
					? `
			<div class="field-row">
				<div class="field-icon">🏢</div>
				<div class="field-content">
					<div class="field-label">Company</div>
						<div class="field-value">${escapeHtml(company)}</div>
				</div>
			</div>`
					: ""
			}

			${
				website
					? `
			<div class="field-row">
				<div class="field-icon">🌐</div>
				<div class="field-content">
					<div class="field-label">Website</div>
					<div class="field-value">
							<a href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(website)}</a>
					</div>
				</div>
			</div>`
					: ""
			}

			<div class="field-row">
				<div class="field-icon">📝</div>
				<div class="field-content">
					<div class="field-label">Subject</div>
						<div class="field-value">${escapeHtml(subject)}</div>
				</div>
			</div>

			<div class="field-row">
				<div class="field-icon">💬</div>
				<div class="field-content">
					<div class="field-label">Message</div>
						<div class="field-value message-value">${escapeHtml(message)}</div>
				</div>
			</div>
		</div>

		<div class="footer">
			© ${new Date().getFullYear()} Bridge Stack Studio
		</div>
	</div>
</div>
</body>
</html>
`;

export const ContactConfirmationTemplate = (name: string) => `Hi ${name.replace(/[\r\n]+/g, " ")},

Thank you for reaching out to Bridge Stack Studio!

We've received your message and our team will respond as soon as possible. If your inquiry is urgent, you may reach us directly through our contact details on the website.

Best regards,
Bridge Stack Studio


This is an automated confirmation. Please do not reply to this email.`;

export const ContactPlainTextTemplate = ({
	name,
	email,
	phone,
	company,
	website,
	subject,
	message,
}: ContactEmailData) =>
	`
New Contact Form Submission

Name: ${name}
Email: ${email}${phone ? `\nPhone: ${phone}` : ""}${company ? `\nCompany: ${company}` : ""}${website ? `\nWebsite: ${website}` : ""}
Subject: ${subject}

Message:
${message}

---
Received: ${new Date().toLocaleString()}
Reply to: ${email}
`.trim();
