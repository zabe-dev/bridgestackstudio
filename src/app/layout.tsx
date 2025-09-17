import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: `Indiana Web Development Agency - ${SITE_TITLE}`,
		template: `%s - ${SITE_TITLE}`,
	},
	description: SITE_DESCRIPTION,
	metadataBase: new URL(
		process.env.NODE_ENV === "production" ? SITE_URL : "http://localhost:3000"
	),
	icons: [
		{ rel: "icon", url: "/favicon.ico" },
		{
			rel: "icon",
			url: "/favicon-16x16.png",
			sizes: "16x16",
			type: "image/png",
		},
		{
			rel: "icon",
			url: "/favicon-32x32.png",
			sizes: "32x32",
			type: "image/png",
		},
		{
			rel: "icon",
			url: "/android-chrome-192x192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			rel: "icon",
			url: "/android-chrome-512x512.png",
			sizes: "512x512",
			type: "image/png",
		},
		{ rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="text-sm/6" lang="en" suppressHydrationWarning>
			<body
				className={clsx(
					poppins.variable,
					"flex min-h-svh w-full min-w-80 flex-col antialiased"
				)}
			>
				<main className="relative mx-auto flex max-w-7xl flex-1 flex-col overflow-hidden px-4 xl:px-0">
					{children}
				</main>
				<SpeedInsights />
			</body>
		</html>
	);
}
