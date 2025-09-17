import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" className="block text-center" prefetch={true}>
			<svg
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
				className="inline-block h-16 w-16"
			>
				<text
					x="50"
					y="140"
					fontFamily="Poppins, sans-serif"
					fontSize="120"
					fontWeight="800"
					fill="currentColor"
				>
					B
				</text>
				<circle cx="145" cy="125" r="12" fill="#22c55e" />
			</svg>
		</Link>
	);
}
