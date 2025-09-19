import Link from "next/link";
import { IconArrowDown, IconRocket } from "@tabler/icons-react";
import RevealOnScroll from "./reveal-on-scroll";
import { Button } from "./ui/button";

export default function HeroSection() {
	return (
		<RevealOnScroll delay={0.5}>
			<section className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-8 py-24 md:grid md:grid-cols-2 md:py-36">
				<div className="flex flex-col gap-6 py-16 sm:gap-8">
					<h2 className="text-foreground/80 text-xs font-bold tracking-widest uppercase sm:text-sm">
						CUSTOM CODED<span className="text-primary">.</span> BLAZING FAST
						<span className="text-primary">.</span> ZERO HASSLE
						<span className="text-primary">.</span>
					</h2>
					<h1 className="leading-tightest text-5xl font-black sm:text-6xl">
						Building Websites That{" "}
						<span className="text-primary">Drive Growth</span> for Your
						Business.
					</h1>
					<p className="text-foreground/95 leading-8 font-light sm:text-lg">
						We build lightning-fast, custom websites for local businesses. No
						templates, no page builders — just modern, hand-coded design. We
						handle everything for you including hosting, updates and maintenance
						so you can focus on running your business.
					</p>
					<div className="flex flex-col gap-4 sm:flex-row">
						<Button
							asChild
							size="lg"
							className="bg-primary text-background p-4 pt-4 sm:p-6"
						>
							<Link href="#contact">
								<IconRocket /> Launch your website today
							</Link>
						</Button>
						<Button
							asChild
							size="lg"
							className="text-foreground p-4 pt-4 sm:p-6"
							variant="outline"
						>
							<Link href="#services">
								View services
								<IconArrowDown />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</RevealOnScroll>
	);
}
