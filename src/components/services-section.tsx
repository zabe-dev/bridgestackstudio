"use client";

import RevealOnScroll from "./reveal-on-scroll";

export default function ServicesSection() {
	return (
		<RevealOnScroll delay={0.5}>
			<section
				id="services"
				className="mx-auto flex max-w-[1400px] flex-col gap-4 px-8 py-12 md:pb-32"
			>
				<div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 text-center">
					<p className="text-foreground/80 text-xs font-bold tracking-widest uppercase md:text-sm">
						BUILT FOR SMALL LOCAL BUSINESS
						<span className="text-primary">.</span>
					</p>
					<p className="leading-tightest text-4xl font-black md:text-6xl">
						We <span className="text-primary">build, host</span> and{" "}
						<span className="text-primary">maintain</span> your website so you
						can focus on your business.
					</p>
					<p className="text-foreground/95 max-w-3xl leading-7 font-light md:text-lg md:leading-8">
						Our basic package includes design, development, hosting, unlimited
						edits, 24/7 support, and lifetime updates, all with a 12-month
						minimum commitment.
					</p>
				</div>
			</section>
		</RevealOnScroll>
	);
}
