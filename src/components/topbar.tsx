import {
	IconBrandLinkedin,
	IconBrandMeta,
	IconBrandX,
	IconMail,
} from "@tabler/icons-react";

export default function Topbar() {
	return (
		<header className="bg-background/80 sticky top-0 z-10 flex h-20 flex-wrap items-center justify-between gap-4 px-4 py-2 backdrop-blur-sm sm:px-8 sm:py-4">
			<div className="flex items-center gap-4">
				<a
					href="https://linkedin.com/company/bridgestackstudio"
					aria-label="LinkedIn"
					className="text-foreground/50 hover:text-primary transition-colors"
				>
					<IconBrandLinkedin size={22} />
				</a>
				<a
					href="https://facebook.com/bridgestackstudio"
					aria-label="Meta"
					className="text-foreground/50 hover:text-primary transition-colors"
				>
					<IconBrandMeta size={22} />
				</a>
				<a
					href="https://x.com/bridgestackstudio"
					aria-label="X (Twitter)"
					className="text-foreground/50 hover:text-primary transition-colors"
				>
					<IconBrandX size={22} />
				</a>
			</div>
			<a
				href="mailto:contact@bridgestackstudio.com"
				className="border-primary text-primary hover:bg-primary focus-visible:ring-primary/50 inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-sm font-medium transition-colors hover:text-white focus-visible:ring-2 focus-visible:outline-none"
				aria-label="Contact us by email"
			>
				<IconMail size={18} />
				Get started today
			</a>
		</header>
	);
}
