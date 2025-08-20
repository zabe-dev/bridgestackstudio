import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Bridge Stack Studio | Indiana Web Development Agency",
	description:
		"Bridge Stack Studio is a web development agency based in Indiana, specializing in building modern web applications and digital solutions.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="text-sm/6" lang="en" suppressHydrationWarning>
			<body
				className={cn(outfit.style, "min-h-svh w-full min-w-80 antialiased")}
			>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
