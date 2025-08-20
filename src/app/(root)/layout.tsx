export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="relative flex min-h-svh flex-col">
			<main className="flex flex-1 flex-col">{children}</main>
		</div>
	);
}
