"use client";

import Image from "next/image";
import Link from "next/link";
import { IconHeartHandshake, IconHelpHexagon } from "@tabler/icons-react";
import { motion } from "motion/react";
import RevealOnScroll from "./reveal-on-scroll";
import { Button } from "./ui/button";

export default function AboutSection() {
	return (
		<RevealOnScroll delay={0.5}>
			<section
				id="about"
				className="mx-auto flex max-w-[1400px] flex-col-reverse px-8 py-12 md:grid md:grid-cols-2 md:py-48"
			>
				<div className="relative">
					<motion.div
						animate={{ y: [0, -15, 0] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="relative top-0 mx-auto mt-12 md:mt-0"
					>
						<Image
							src="/about-section-image.svg"
							alt="Hero Image"
							width={550}
							height={550}
							priority
						/>
					</motion.div>
				</div>

				<div className="flex flex-col gap-6 py-2 md:gap-8">
					<div className="flex flex-wrap gap-2">
						<p className="text-foreground/80 text-xs font-bold tracking-widest uppercase md:text-sm">
							BRIDGESTACKSTUDIO
							<span className="text-primary">.</span>
						</p>
					</div>
					<p className="leading-tightest text-4xl font-black md:text-6xl">
						What sets us <span className="text-primary">apart</span>?
					</p>
					<p className="text-foreground/95 leading-7 font-light md:text-lg md:leading-8">
						We’re an Indiana-based startup web agency dedicated to helping small
						and local businesses establish a stronger online presence. Unlike
						traditional agencies, we build lightning-fast, fully custom websites
						from the ground up — no templates, page builders, or WordPress. Our
						approach is rooted in smart strategy, modern design, and hand-coded
						performance to ensure your business stands out and your website
						works as hard as you do.
					</p>
					<p className="text-foreground/95 leading-7 font-light md:text-lg md:leading-8">
						Beyond design and development, we handle the essentials that keep
						your site running smoothly — hosting, maintenance, updates, and
						ongoing support — so you don’t have to juggle multiple vendors.
						Whether you’re launching your first website or looking to replace an
						outdated one, our services are tailored to your goals and built to
						grow with your business, giving you a complete, worry-free online
						solution.
					</p>
					<div className="flex flex-col gap-4 md:flex-row">
						<Button
							asChild
							size="lg"
							className="border-primary/20 text-background hover:bg-primary/10 gap-2 border-2 px-4 py-6 hover:text-green-400 md:px-6 md:py-8 md:text-lg"
						>
							<Link href="#contact">
								<IconHeartHandshake /> Work with us
							</Link>
						</Button>

						<Button
							asChild
							variant="outline"
							size="lg"
							className="text-primary hover:bg-background/10 gap-2 border-2 px-4 py-6 md:px-6 md:py-8 md:text-lg"
						>
							<Link href="#faqs">
								<IconHelpHexagon /> Frequently asked questions
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</RevealOnScroll>
	);
}
