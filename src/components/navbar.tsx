import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
	return (
		<nav className="sticky top-0 left-0 z-10 flex h-screen w-[60px] flex-col items-center overflow-y-scroll">
			<Logo />
			<ul className="my-8 flex w-full flex-col items-stretch justify-center">
				{[
					{ href: "#about", label: "About" },
					{ href: "#services", label: "Services" },
					{ href: "#pricing", label: "Pricing" },
					{ href: "#faqs", label: "FAQs" },
					{ href: "#contact", label: "Contact" },
				].map((item) => (
					<li
						key={item.href}
						className="hover:bg-background hover:border-r-primary flex h-[100px] items-center justify-center border-r border-r-transparent text-xl opacity-50 transition-all duration-100 hover:opacity-100"
					>
						<Link href={item.href}>{item.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
