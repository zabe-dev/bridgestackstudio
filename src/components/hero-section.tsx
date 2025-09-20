"use client";

import Image from "next/image";
import Link from "next/link";
import { IconBlocks, IconRocket } from "@tabler/icons-react";
import { motion } from "motion/react";
import RevealOnScroll from "./reveal-on-scroll";
import { Button } from "./ui/button";

export default function HeroSection() {
	return (
		<RevealOnScroll delay={0.5}>
			<section
				id="hero"
				className="mx-auto flex max-w-[1440px] flex-col px-8 py-12 md:grid md:grid-cols-2 md:py-48"
			>
				<div className="flex flex-col gap-6 pt-2 md:gap-8">
					<div className="flex flex-wrap gap-2">
						{["CUSTOM CODED", "BLAZING FAST", "ZERO HASSLE"].map(
							(text, index) => (
								<p
									key={index}
									className="text-foreground/80 text-xs font-bold tracking-widest uppercase md:text-sm"
								>
									{text}
									<span className="text-primary">.</span>
								</p>
							)
						)}
					</div>
					<h1 className="leading-tightest text-4xl font-black md:text-6xl">
						Building websites that{" "}
						<span className="text-primary">drive growth</span> for your local
						business.
					</h1>
					<p className="text-foreground/95 leading-7 font-light md:text-lg md:leading-8">
						We build lightning-fast, custom websites for local businesses. No
						templates, no page builders — just modern, hand-coded design. We
						handle everything for you including hosting, updates and maintenance
						so you can focus on running your business.
					</p>
					<div className="flex flex-col gap-4 md:flex-row">
						<Button
							asChild
							size="lg"
							className="border-primary/20 text-background hover:bg-primary/10 gap-2 border-2 px-4 py-6 hover:text-green-400 md:px-6 md:py-8 md:text-lg"
						>
							<Link href="#contact">
								<IconRocket /> Let&apos;s get started
							</Link>
						</Button>
						<Button
							asChild
							size="lg"
							className="text-primary hover:bg-background/10 gap-2 border-2 px-4 py-6 md:px-6 md:py-8 md:text-lg"
							variant="outline"
						>
							<Link href="#services">
								<IconBlocks />
								Learn more
							</Link>
						</Button>
					</div>
				</div>

				<div className="relative">
					<motion.div
						animate={{ y: [0, -15, 0] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="relative top-0 mx-auto mt-12 md:left-25 md:mt-0"
					>
						<Image
							src="/hero-section-image.svg"
							alt="Hero Image"
							width={550}
							height={550}
							priority
						/>
					</motion.div>
				</div>
			</section>
		</RevealOnScroll>
	);
}
