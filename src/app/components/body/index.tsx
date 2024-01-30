"use client";

import { useTheme } from "@/store/theme";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface IProps {
	className?: string;
	children?: React.ReactNode;
}

export const BodyTheme = ({ className, children }: IProps) => {
	const { enabled: themeSelection } = useTheme();

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return (
			<body suppressHydrationWarning>
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
			</body>
		);
	}
	return (
		<body
			suppressHydrationWarning
			className={clsx(`${className} z-0`, {
				"bg-backgroundCustom-primary text-white": themeSelection === "dark",
				"bg-foregroundCustom-primary text-black shadow-lg border-b-1 border-solid border-zinc-200":
					themeSelection === "light",
			})}
		>
			{children}
			<SpeedInsights />
			<Analytics />
		</body>
	);
};
