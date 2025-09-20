"use client";

import {
	IconBolt,
	IconBrandFramerMotion,
	IconBrandNextjs,
	IconBrandReact,
	IconBrandTailwind,
	IconDeviceMobile,
	IconPalette,
	IconSearch,
	IconShield,
	IconTools,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import RevealOnScroll from "./reveal-on-scroll";

export const services = [
	{
		title: "Custom Coded",
		description:
			"We create websites that reflect your brand identity and engage your audience. Every design is unique and tailored to your business goals.",
		icon: <IconPalette />,
	},
	{
		title: "Responsive Design",
		description:
			"Your website will look and perform flawlessly on all devices, from desktops to smartphones. We prioritize a smooth experience for every visitor.",
		icon: <IconDeviceMobile />,
	},
	{
		title: "100% Page Speed",
		description:
			"Our sites are optimized for speed, reliability, and seamless navigation. Fast-loading websites keep users engaged and reduce bounce rates.",
		icon: <IconBolt />,
	},
	{
		title: "SEO & Digital Marketing",
		description:
			"We implement clear, effective SEO strategies to improve your search rankings. Our approach drives traffic and helps grow your online presence.",
		icon: <IconSearch />,
	},
	{
		title: "Unmatched Support",
		description:
			"We provide reliable support  to keep your website secure, updated, and performing at its best. You'll have peace of mind knowing help is always available.",
		icon: <IconTools />,
	},
	{
		title: "Money-back Guarantee",
		description:
			"If our design doesn't meet your expectations, you'll receive a full refund and the contract will be canceled. We proudly stand behind the quality of our work.",
		icon: <IconShield />,
	},
];

export const techIcons = [
	{ icon: IconBrandReact, label: "ReactJS" },
	{ icon: IconBrandNextjs, label: "NextJS" },
	{ icon: IconBrandTailwind, label: "TailwindCSS" },
	{ icon: IconBrandFramerMotion, label: "Motion" },
];

export default function ServicesSection() {
	return (
		<section
			id="services"
			className="mx-auto flex max-w-[1400px] flex-col gap-4 px-8 py-12 md:grid md:grid-cols-[40%_60%] md:py-48"
		>
			<RevealOnScroll delay={0.2}>
				<div className="mx-auto flex max-w-5xl flex-col gap-8 py-2">
					<p className="text-foreground/80 text-xs font-bold tracking-widest uppercase md:text-sm">
						EMPOWERING SMALL & LOCAL BUSINESSES
						<span className="text-primary">.</span>
					</p>
					<p className="leading-tightest text-4xl font-black md:text-6xl">
						We <span className="text-primary">manage</span> your website so you
						can focus on business.
					</p>
					<p className="text-foreground/95 max-w-xl leading-7 font-light md:text-lg md:leading-8">
						Our basic package includes design, development, hosting, unlimited
						edits, 24/7 support, and lifetime updates, all with a 12-month
						minimum commitment.
					</p>

					<div className="flex flex-col gap-4 py-12">
						<p className="text-foreground/95 leading-7 font-light md:text-sm md:leading-8">
							BUILT WITH TRUSTED TECHNOLOGIES
						</p>
						<div className="flex items-center gap-4">
							{techIcons.map(({ icon: Icon, label }, index) => (
								<motion.div
									key={label}
									initial={{ opacity: 0, y: -20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.2,
										duration: 0.5,
										ease: "easeOut",
									}}
									className="flex items-center gap-2"
								>
									<Icon
										stroke={1}
										className="text-primary h-10 w-10 transition-colors duration-500"
									/>
									<span className="hidden text-sm md:inline-block">
										{label}
									</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</RevealOnScroll>

			<RevealOnScroll>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="px-0 md:px-2.5"
				>
					<HoverEffect items={services} />
				</motion.div>
			</RevealOnScroll>
		</section>
	);
}
