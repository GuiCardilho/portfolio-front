"use client";

import { useTheme } from "@/store/theme";
import clsx from "clsx";

interface IProps {
	className?: string;
	children?: React.ReactNode;
}

export const BodyTheme = ({ className, children }: IProps) => {
	const { enabled: themeSelection, toggle } = useTheme();

	return (
		<body
			suppressHydrationWarning={true}
			className={clsx("z-0", {
				"bg-backgroundCustom-primary text-white": themeSelection === "dark",
				"bg-foregroundCustom-primary text-black shadow-lg border-b-1 border-solid border-zinc-200":
					themeSelection === "light",
			})}
		>
			{children}
		</body>
	);
};
