import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import "./globals.css";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: `${SITE_TITLE}| Indiana Web Development Agency`,
		template: `%s | ${SITE_TITLE} `,
	},
	description: SITE_DESCRIPTION,
	metadataBase: new URL(
		process.env.NODE_ENV === "production" ? SITE_URL : "http://localhost:3000"
	),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="text-sm/6" lang="en" suppressHydrationWarning>
			<body
				className={cn(
					outfit.style,
					"flex min-h-svh w-full min-w-80 flex-col antialiased"
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className="relative flex flex-1 flex-col overflow-hidden">
						{children}
					</main>
					<Footer />
				</ThemeProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
