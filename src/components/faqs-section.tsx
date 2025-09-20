"use client";

import Link from "next/link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import RevealOnScroll from "./reveal-on-scroll";

const faqs = [
	{
		question: "How long does a typical project take?",
		answer: `We generally complete a website within 14 to 20 days.
    This timeline includes acquiring all necessary content and assets,
    securing your approval on the design, and completing development.
    The exact duration may vary depending on how quickly we receive
    materials and approvals from you.`,
	},
	{
		question: "Do you use templates or page builders?",
		answer: `No — all of our websites are built using custom, hand-written code.
    We don’t rely on templates or page builders. This approach sets us apart,
    allowing us to create tailored, high-performance websites that stand out
    and deliver exceptional results for our clients after launch.`,
	},
	{
		question: "Why choose custom code over page builders?",
		answer:
			"Our custom-coded websites are faster, more secure, and easier to maintain than WordPress sites. With no unnecessary plugins or databases, they load quickly, require minimal upkeep, and are fully tailored to your business — without the bloat or constant updates typical of template-based platforms.",
	},
	{
		question: "How do we request edits for our site?",
		answer:
			"You can request edits by calling or texting us, submitting a request through our contact form, or emailing us directly at contact@bridgestackstudio.com. Each request goes into our ticketing system so our team can review, complete, and mark it as resolved.",
	},
	{
		question: "What kind of SEO do you offer?",
		answer:
			"We focus primarily on on-page SEO — optimizing your site’s content, structure, and performance for search engines. Off-page SEO  is not included in our standard packages but can be arranged as an additional service for an extra fee.",
	},
	{
		question: "Why is the monthly plan billed for a full year?",
		answer:
			"Our monthly plan begins with a 12-month commitment to ensure we can cover the upfront costs of design, development, and setup. After the first year, your plan converts to a flexible month-to-month subscription, giving you the freedom to continue or cancel as needed.",
	},
	{
		question: "What happens if I cancel before my first 12 months?",
		answer:
			"If you cancel before completing the 12-month term, you’ll be responsible for the remaining balance of the website’s full cost minus any payments already made. We structure our plans to support long-term partnerships and encourage clients who share the same commitment.",
	},
	{
		question: "How do you handle late payments?",
		answer:
			"We offer a two-week grace period for late payments. After that period, services may be suspended or terminated until payment is received.",
	},
	{
		question: "What payment methods do you accept?",
		answer:
			"We send invoices securely through PayPal, allowing you to pay with a credit or debit card (no PayPal account required). Please note that we do not accept checks or money orders.",
	},
	{
		question: "If I cancel my subscription, do I keep my domain?",
		answer:
			"Yes — when you cancel your subscription, we’ll transfer the domain to your ownership so you can manage it directly.",
	},
	{
		question: "Do you offer refunds?",
		answer:
			"If, after signing a contract, we’re unable to create a design you’re happy with and you choose not to move forward, we’ll refund your initial payment. However, once we begin building the site, payments are non-refundable, and any further refunds are at our discretion.",
	},
	{
		question: "Do I keep my site if I cancel the subscription?",
		answer:
			"No — the website itself remains our property under the subscription plan. However, your domain can be transferred to you so you retain full ownership of it. If you’d like to fully own your website, you can choose our one-time payment plan, which grants complete ownership after launch.",
	},
];

export default function FaqsSection() {
	return (
		<section
			id="faqs"
			className="relative mx-auto w-full max-w-[1440px] px-8 py-12 md:grid md:grid-cols-2 md:py-48"
		>
			<RevealOnScroll delay={0.2}>
				<div className="sticky top-20 mx-auto mb-12 flex max-w-5xl flex-col gap-8 py-2 md:top-50">
					<p className="text-foreground/80 text-xs font-bold tracking-widest uppercase md:text-sm">
						EVERYTHING YOU NEED TO KNOW
						<span className="text-primary">.</span>
					</p>
					<p className="leading-tightest text-4xl font-black md:text-6xl">
						Frequently asked <span className="text-primary">questions.</span>
					</p>
					<p className="text-foreground/95 max-w-lg leading-7 font-light md:text-lg md:leading-8">
						If you can&#39;t find what you are looking for,{" "}
						<Link
							href="#contact"
							className="hover:text-primary hover:border-b-primary border-b-primary border-b-2 pb-1 transition-colors duration-500"
						>
							get in touch.
						</Link>
					</p>
				</div>
			</RevealOnScroll>

			<RevealOnScroll delay={0.2}>
				<Accordion
					type="single"
					collapsible
					className="mt-12 w-full"
					defaultValue="item-1"
				>
					{faqs.map(({ question, answer }, index) => (
						<AccordionItem
							key={index}
							value={`item-${index + 1}`}
							className="space-y-4"
						>
							<AccordionTrigger className="text-foreground/80 text-lg font-bold tracking-widest uppercase md:text-xl">
								{question}
							</AccordionTrigger>
							<AccordionContent>
								<p className="text-foreground/95 leading-7 font-light md:text-lg md:leading-8">
									{answer}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</RevealOnScroll>
		</section>
	);
}
