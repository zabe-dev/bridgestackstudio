import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" aria-label="Home" className="block text-center">
			<svg
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
				className="bg-background my-4 h-12 w-12 shrink-0 rounded-md"
			>
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					dominantBaseline="middle"
					fontFamily="Poppins, sans-serif"
					fontSize="120"
					fontWeight="900"
					fill="currentColor"
				>
					B
				</text>
				<circle cx="75%" cy="60%" r="7%" fill="#22c55e" />
			</svg>
		</Link>
	);
}
