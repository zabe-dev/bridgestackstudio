"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface RevealOnScrollProps {
	children: React.ReactNode;
	delay?: number;
	duration?: number;
}

export default function RevealOnScroll({
	children,
	delay = 0,
	duration = 0.6,
}: RevealOnScrollProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-200px" });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration, delay, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}
