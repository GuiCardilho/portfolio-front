"use client";

import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return (
			<div>
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
			</div>
		);
	}

	return (
		<div className="flex flex-col w-full h-full overflow-y-hidden" suppressHydrationWarning>
			<Navbar />
			{children}
		</div>
	);
}
