import type { Metadata } from "next";
import "./globals.css";
import { Manrope, DM_Sans } from "next/font/google";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const title = "Bridge Stack Studio | Websites That Help Search Leads Reach You";
const description = "Indiana studio for search-ready service pages, redesigns, managed hosting, and updates that help more people find, trust, and contact you.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bridgestackstudio.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: "/", siteName: "Bridge Stack Studio", locale: "en_US",
    title, description,
    images: [{ url: "/brand/mark.png", width: 1024, height: 1024, alt: "Bridge Stack Studio brand mark" }],
  },
  twitter: { card: "summary", title, description, images: ["/brand/mark.png"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${body.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
