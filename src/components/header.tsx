import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<div className="border-b border-gray-500/25 px-8 py-4 backdrop-blur-sm">
			<div className="mx-auto flex max-w-7xl justify-between px-4 xl:px-0">
				<Logo />
				<div className="flex items-center justify-center gap-8">
					{NAV_LINKS.map((e) => (
						<Link
							key={e.index}
							href={e.path}
							className="hover:text-primary transition-colors duration-200"
						>
							{e.label}
						</Link>
					))}
					<ModeToggle />
					<Button className="cursor-pointer">Contact us</Button>
				</div>
			</div>
		</div>
	);
}
