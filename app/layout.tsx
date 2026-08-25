import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bridgestackstudio.com"),
  title: "Bridge Stack Studio — Custom-coded websites for Indiana businesses",
  description:
    "No templates. No page builders. We design, build, host, and maintain fast, fully custom websites for small businesses across Indiana — start to finish.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Bridge Stack Studio",
    title: "Bridge Stack Studio — Custom-coded websites for Indiana businesses",
    description: "Fast, fully custom websites for small businesses across Indiana.",
  },
  twitter: { card: "summary", title: "Bridge Stack Studio", description: "Custom-coded websites for Indiana businesses." },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      >
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
