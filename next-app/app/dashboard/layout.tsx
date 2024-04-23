export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section>
			<p>this is a layout from dashboard</p>
			{children}
		</section>
	);
}
