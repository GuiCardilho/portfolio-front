import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "intro.js/introjs.css";
import { BodyTheme } from "./components/body";
import "./globals.css";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin-ext"],
});

export const metadata: Metadata = {
	title: "Portfolio Guilherme",
	description: "Guilherme's portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<BodyTheme className={poppins.className}>{children}</BodyTheme>
		</html>
	);
}
