import { Navbar } from "@/components/navbar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col w-full h-full ">
			<Navbar />
			{children}
		</div>
	);
}