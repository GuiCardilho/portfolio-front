import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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
		<html lang="pt-BR">
			<BodyTheme className={poppins.className}>{children}</BodyTheme>
			<Analytics />
		</html>
	);
}
