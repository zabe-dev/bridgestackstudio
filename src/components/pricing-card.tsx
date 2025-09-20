import Link from "next/link";
import { IconCheck, IconPhone, IconX } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PricingCard({
	isPopular,
	title,
	description,
	price,
	subPrice,
	cta,
	features,
}: {
	isPopular?: boolean;
	title: string;
	description: string;
	price: string;
	subPrice: string;
	cta: { href: string; text: string };
	features: {
		icon: "check" | "x";
		title: string;
		details: string[];
	}[];
}) {
	return (
		<div
			className={`flex flex-col gap-4 rounded-2xl border px-10 pt-12 ${
				isPopular ? "border-primary/90" : "border-border"
			}`}
		>
			<p className="text-xl font-bold">{title}</p>
			<p className="text-foreground/95 leading-6 font-light md:leading-7">
				{description}
			</p>

			<p className="my-8 text-4xl leading-5 font-bold md:text-5xl">
				{price} <span className="text-xs font-light">{subPrice}</span>
			</p>

			<Button
				asChild
				size="lg"
				className={cn(
					"hover:bg-background/10 flex items-center gap-2 rounded-xl border-2 px-4 py-6 font-medium md:gap-4 md:px-6 md:py-8 md:text-lg",
					isPopular ? "text-primary" : "text-foreground/90"
				)}
				variant="outline"
			>
				<Link href={cta.href}>
					<IconPhone /> {cta.text}
				</Link>
			</Button>

			<div className="flex flex-col gap-3.5 py-12">
				{features.map((feature, i) => {
					const Icon = feature.icon === "check" ? IconCheck : IconX;
					return (
						<ul key={i}>
							<li className="flex flex-col gap-2">
								<div className="flex items-center gap-2.5">
									<Icon
										className={`h-6 w-6 ${
											feature.icon === "check" ? "text-primary" : "text-red-500"
										}`}
									/>
									<span className="text-lg">{feature.title}</span>
								</div>
								<ul className="text-foreground/90 ml-12 flex list-disc flex-col gap-2.5 text-sm leading-4 font-light md:leading-5">
									{feature.details.map((d, idx) => (
										<li key={idx}>{d}</li>
									))}
								</ul>
							</li>
						</ul>
					);
				})}
			</div>
		</div>
	);
}
