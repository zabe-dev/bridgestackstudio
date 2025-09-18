"use client";

import { type Variants, motion } from "motion/react";
import Topbar from "@/components/topbar";

const sections = [
	{ id: "hero", title: "Hero Section" },
	{ id: "about", title: "About Section" },
	{ id: "services", title: "Services Section" },
	{ id: "pricing", title: "Pricing Section" },
	{ id: "faqs", title: "FAQs Section" },
	{ id: "contact", title: "Contact Section" },
];

const sectionVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
	},
};

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Topbar />

			<main className="flex flex-col">
				{sections.map(({ id, title }) => (
					<motion.section
						key={id}
						id={id}
						variants={sectionVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-16 text-center"
						aria-labelledby={`${id}-heading`}
					>
						<h1 id={`${id}-heading`} className="text-3xl font-bold">
							{title}
						</h1>
					</motion.section>
				))}
			</main>
		</div>
	);
}
