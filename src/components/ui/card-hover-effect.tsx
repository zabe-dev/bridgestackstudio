"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		title: string;
		description: string;
		icon?: React.ReactNode;
	}[];
	className?: string;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
				className
			)}
		>
			{items.map((item, idx) => (
				<motion.div
					key={idx}
					className="group relative block h-full w-full p-2"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
					initial={{ opacity: 0, y: 60 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.6,
							delay: idx * 0.15,
							ease: "easeOut",
						},
					}}
					viewport={{ once: true }}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 block h-full w-full rounded-3xl"
								style={{ backgroundColor: "#03ff9c" }}
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 0.1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Card>
						<CardTitle icon={item.icon}>{item.title}</CardTitle>
						<CardDescription>{item.description}</CardDescription>
					</Card>
				</motion.div>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"relative z-20 h-full w-full cursor-default overflow-hidden rounded-2xl border bg-transparent p-4 transition-all duration-300 group-hover:border-[#03ff9c]/80",
				className
			)}
		>
			<div className="relative z-50">
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export const CardTitle = ({
	className,
	children,
	icon,
}: {
	className?: string;
	children: React.ReactNode;
	icon?: React.ReactNode;
}) => {
	return (
		<h4
			className={cn(
				"leading-tightest mt-4 flex items-center gap-3 font-black tracking-wide text-white",
				className
			)}
		>
			{icon && (
				<span className="flex-shrink-0 text-xl text-[#03ff9c]">{icon}</span>
			)}
			{children}
		</h4>
	);
};

export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"text-foreground/95 mt-8 text-sm leading-7 font-light tracking-wide",
				className
			)}
		>
			{children}
		</p>
	);
};
