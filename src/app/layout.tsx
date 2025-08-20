import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/styles/globals.css";


export const metadata: Metadata = {
	title: "Bridge Stack Studio | Indiana Web Development Agency",
	description: "Bridge Stack Studio is a web development agency based in Indiana, specializing in building modern web applications and digital solutions.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
				/>
			</head>
			<body className="antialiased">
				{children}
				<SpeedInsights/>
			</body>
		</html>
	);
}
