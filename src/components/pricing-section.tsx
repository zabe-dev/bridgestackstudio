"use client";

import { motion } from "motion/react";
import PricingCard from "./pricing-card";
import RevealOnScroll from "./reveal-on-scroll";

const basicPlanFeatures: {
	icon: "check" | "x";
	title: string;
	details: string[];
}[] = [
	{
		icon: "check",
		title: "Design & Development",
		details: [
			"Fully customized website design tailored to your brand identity.",
			"Responsive layouts optimized for mobile, tablet, and desktop devices.",
			"User-friendly navigation with SEO-ready structure to boost online visibility.",
			"Includes up to 5 pages, with $100 per extra page if needed.",
		],
	},
	{
		icon: "check",
		title: "Cloud Hosting",
		details: [
			"Secure, high-performance hosting to ensure fast page load times.",
			"Fully managed with automatic backups and no setup required.",
		],
	},
	{
		icon: "check",
		title: "Free Domain & Email",
		details: [
			"Domain registration and setup included.",
			"Professional email addresses using your domain (e.g., contact@yourbusiness.com).",
		],
	},
	{
		icon: "x",
		title: "24/7 Support",
		details: ["Round-the-clock assistance for technical issues or questions."],
	},
	{
		icon: "x",
		title: "Unlimited Revisions",
		details: ["Make unlimited changes to content, layout, or design."],
	},
	{
		icon: "x",
		title: "Lifetime Updates",
		details: [
			"Continuous feature and security updates included.",
			"Keeps your website modern and fully functional with no extra fees.",
		],
	},
];

const monthlyPlanFeatures = basicPlanFeatures.map((feature) => ({
	...feature,
	icon: "check" as const,
}));

const enterprisePlanFeatures: {
	icon: "check" | "x";
	title: string;
	details: string[];
}[] = [
	{
		icon: "check",
		title: "Custom Web Applications",
		details: [
			"Complex, scalable web applications designed to handle large datasets.",
			"Secure database integration and data processing workflows.",
			"Custom dashboards and reporting tailored to your business needs.",
		],
	},
	{
		icon: "check",
		title: "Mobile App Development",
		details: [
			"Native or cross-platform mobile apps for iOS and Android.",
			"Seamless integration with your existing systems and APIs.",
		],
	},
	{
		icon: "check",
		title: "CMS & Ecommerce Solutions",
		details: [
			"Powerful content management systems (WordPress, headless CMS, custom builds).",
			"Full ecommerce setup: product catalogs, checkout, and payment gateway integration.",
			"Optimized for scalability and high traffic performance.",
		],
	},
	{
		icon: "check",
		title: "Advanced Hosting & Infrastructure",
		details: [
			"Cloud architecture built for high availability and security.",
			"Load balancing, auto-scaling, and continuous monitoring.",
		],
	},
	{
		icon: "check",
		title: "Priority Support & Maintenance",
		details: [
			"Dedicated account manager and premium support response times.",
			"Continuous feature updates, bug fixes, and performance improvements.",
		],
	},
];

export default function PricingSection() {
	return (
		<section
			id="pricing"
			className="mx-auto w-full max-w-[1440px] px-8 py-12 md:py-48"
		>
			<RevealOnScroll delay={0.2}>
				<div className="mx-auto flex flex-col gap-8 py-2 text-center">
					<p className="text-foreground/80 text-xs font-bold tracking-widest uppercase md:text-sm">
						INVEST IN YOUR BUSINESS GROWTH AND SUCCESS
						<span className="text-primary">.</span>
					</p>
					<p className="leading-tightest text-4xl font-black md:text-6xl">
						Plans <span className="text-primary">&</span> Pricing
					</p>
					<p className="text-foreground/95 leading-7 font-light md:text-lg md:leading-8">
						Choose the plan that fits your needs and grow your business with
						confidence.
					</p>
				</div>
			</RevealOnScroll>

			<div className="my-24 grid w-full grid-cols-1 gap-4 px-0 md:grid-cols-3 md:gap-6 md:px-24">
				{[
					{
						title: "ONE TIME PLAN",
						description:
							"Single payment package, with limited support and updates.",
						price: "$3,000",
						subPrice: "+$25/month hosting",
						features: basicPlanFeatures,
					},
					{
						isPopular: true,
						title: "MONTHLY PLAN",
						description:
							"Flexible monthly subscription with ongoing updates and support.",
						price: "$185/mo",
						subPrice: "*one year contract",
						features: monthlyPlanFeatures,
					},
					{
						title: "ENTERPRISE PLAN",
						description:
							"Tailored solutions for large businesses with premium support.",
						price: "$8,000",
						subPrice: "*starting price",
						features: enterprisePlanFeatures,
					},
				].map((card, index) => (
					<motion.div
						key={card.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
						viewport={{ once: true }}
					>
						<PricingCard
							isPopular={card.isPopular}
							title={card.title}
							description={card.description}
							price={card.price}
							subPrice={card.subPrice}
							cta={{ href: "#services", text: "Schedule a call" }}
							features={card.features}
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
}
