"use client";

import {
	IconBrandFacebook,
	IconBrandLinkedin,
	IconBrandX,
	IconMail,
} from "@tabler/icons-react";
import { motion } from "motion/react";

const socialLinks = [
	{
		href: "https://facebook.com/bridgestackstudio",
		Icon: IconBrandFacebook,
	},
	{
		href: "https://x.com/bridgestackstudio",
		Icon: IconBrandX,
	},
	{
		href: "https://linkedin.com/company/bridgestackstudio",
		Icon: IconBrandLinkedin,
	},
];

export default function Header() {
	return (
		<header className="bg-background/80 sticky top-0 z-100 flex h-20 flex-wrap items-center justify-between gap-4 px-4 py-2 backdrop-blur-sm sm:px-8 sm:py-4">
			<div className="flex items-center gap-4">
				{socialLinks.map(({ href, Icon }, index) => (
					<motion.a
						key={href}
						href={href}
						className="text-foreground/50 hover:text-primary transition-colors"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: index * 0.1,
							ease: "easeOut",
						}}
					>
						<Icon size={22} />
					</motion.a>
				))}
			</div>

			<motion.a
				href="mailto:contact@bridgestackstudio.com"
				className="text-primary border-primary/20 hover:bg-primary/10 flex w-fit items-center gap-2 rounded-lg border-2 px-4 py-2 font-medium transition-colors duration-500 hover:text-green-400"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.3,
					ease: "easeOut",
				}}
			>
				<IconMail size={18} />
				Send us a message
			</motion.a>
		</header>
	);
}
