"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MENU_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Logo from "./logo";

export default function Navbar() {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSections = entries
					.filter((e) => e.isIntersecting)
					.map((e) => `#${e.target.id}`)
					.filter((id) => MENU_ITEMS.some((item) => item.href === id));

				if (visibleSections.length > 0) {
					setActiveSection(visibleSections[0]);
				} else {
					setActiveSection("");
				}
			},
			{ rootMargin: "-50% 0px -50% 0px" }
		);

		MENU_ITEMS.forEach((item) => {
			const el = document.getElementById(item.href.slice(1));
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<motion.aside
			className="bg-aside-background sticky top-0 left-0 z-10 h-screen"
			initial={{ x: -64, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<motion.nav
				className="flex h-full flex-col items-center gap-2"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {},
					visible: {
						transition: {
							delayChildren: 0.3,
							staggerChildren: 0.1,
						},
					},
				}}
			>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: -20 },
						visible: { opacity: 1, y: 0 },
					}}
					transition={{ duration: 0.5 }}
				>
					<Logo />
				</motion.div>

				<motion.ul
					className="flex flex-1 flex-col items-center py-4"
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.1,
							},
						},
					}}
				>
					{MENU_ITEMS.map(({ href, label }) => (
						<motion.li
							key={href}
							variants={{
								hidden: {
									opacity: 0,
									x: -50,
								},
								visible: {
									opacity: 1,
									x: 0,
								},
							}}
							transition={{
								duration: 0.5,
								ease: "easeOut",
							}}
						>
							<Link
								href={href}
								className={cn(
									"hover:border-r-primary hover:bg-background flex h-28 w-16 items-center justify-center border-r border-r-transparent text-xl opacity-50 transition-all duration-500 hover:opacity-100",
									activeSection === href
										? "border-r-primary bg-background opacity-100"
										: ""
								)}
							>
								{label}
							</Link>
						</motion.li>
					))}
				</motion.ul>
			</motion.nav>
		</motion.aside>
	);
}
