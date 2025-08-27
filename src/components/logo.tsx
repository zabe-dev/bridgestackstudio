"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Logo() {
	const { theme } = useTheme();

	return (
		<Link href="/" className="flex items-center gap-4 text-xl font-bold">
			<Image
				src="/logo.svg"
				alt="BridgeStack Studio Logo"
				width={50}
				height={50}
			/>
			BridgeStackStudio
		</Link>
	);
}
