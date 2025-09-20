"use client";

import RevealOnScroll from "./reveal-on-scroll";

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="mx-auto w-full max-w-[1440px] px-8 py-12 md:py-48"
		>
			<RevealOnScroll delay={0.2}>
				<div className="mx-auto flex flex-col gap-8 py-2 text-center">
					<p className="text-foreground/80 text-xs font-bold tracking-widest uppercase md:text-sm">
						CONTACT US
						<span className="text-primary">.</span>
					</p>
					<p className="leading-tightest text-4xl font-black md:text-6xl">
						<span className="text-primary">Schedule</span> a call.
					</p>
					<p className="text-foreground/95 leading-7 font-light md:text-lg md:leading-8">
						Connect with us to explore solutions tailored to your business
						needs.
					</p>
				</div>
			</RevealOnScroll>
		</section>
	);
}
