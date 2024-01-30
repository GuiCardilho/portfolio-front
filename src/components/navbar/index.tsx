"use client";
import { useTheme } from "@/store/theme";
import { Switch } from "@headlessui/react";

import clsx from "clsx";
import { HiMoon, HiOutlineMoon, HiOutlineSun, HiSun } from "react-icons/hi";
import { TransitionDefault } from "../transition";

export const Navbar = () => {
	const { enabled: themeSelection, toggle } = useTheme();

	const links = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: "About",
			href: "/about",
		},
		{
			name: "Projects",
			href: "/projects",
		},
		{
			name: "Contact",
			href: "/contact",
		},
	];

	return (
		<div
			className={clsx("flex justify-around py-4 fixed z-10 w-full", {
				"bg-backgroundCustom-primary text-white": themeSelection === "dark",
				"bg-foregroundCustom-primary text-black shadow-lg border-b-1 border-solid border-zinc-200":
					themeSelection === "light",
			})}
		>
			<div className="font-bold hidden sm:flex gap-2">
				Guilherme
				<span
					className={clsx("text-transparent bg-gradient-to-r bg-clip-text", {
						"font-normal from-violet-600 to-pink-400": themeSelection === "dark",
						"font-bold from-blue-500 to-cyan-600": themeSelection === "light",
					})}
				>
					Cardilho
				</span>
			</div>

			<div className="font-bold sm:hidden text-transparent bg-gradient-to-r from-violet-200 to-pink-300 bg-clip-text">
				GC
			</div>

			<div>
				<ul className="gap-6 font-medium hidden sm:flex">
					{links.map((link) => (
						<li
							key={link.name}
							className={clsx("cursor-pointer transition-all font-medium", {
								"font-bold text-transparent bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text":
									link.href === "/" && themeSelection === "dark",

								"hover:text-violet-500 active:text-violet-400": link.href !== "/" && themeSelection === "dark",
								"from-violet-600 to-pink-400": themeSelection === "dark",

								"font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text":
									link.href === "/" && themeSelection === "light",
								"hover:text-blue-500 active:text-cyan-600": link.href !== "/" && themeSelection === "light",
								"from-blue-500 to-cyan-600": themeSelection === "light",
							})}
						>
							{link.name}
						</li>
					))}
				</ul>
			</div>

			<div className="flex  gap-1 sm:gap-5 justify-between">
				<div className="relative w-6">
					<TransitionDefault active={themeSelection !== "dark"} className="absolute left-0">
						<HiSun className="text-2xl text-yellow-400 flex flex-col flex-1 w-full h-full gap-8 tall:gap-4" />
					</TransitionDefault>

					<TransitionDefault
						active={themeSelection === "dark"}
						className="absolute left-0 flex flex-col flex-1 w-full h-full gap-8 tall:gap-4"
					>
						<HiOutlineSun className="text-2xl" />
					</TransitionDefault>
				</div>

				<Switch
					checked={themeSelection === "dark"}
					onChange={toggle}
					className={`${
						themeSelection === "dark" ? "bg-gray-400" : "bg-yellow-400"
					} relative inline-flex h-6 w-11 items-center rounded-full`}
				>
					<span className="sr-only">Enable notifications</span>
					<span
						className={`${
							themeSelection === "dark" ? "translate-x-6" : "translate-x-1"
						} inline-block h-4 w-4 transform rounded-full bg-white transition`}
					/>
				</Switch>

				<div className="relative w-6 ">
					<TransitionDefault
						active={themeSelection === "dark"}
						className="absolute right-0 flex flex-col flex-1 w-full h-full gap-8 tall:gap-4"
					>
						<HiMoon className="text-2xl" />
					</TransitionDefault>

					<TransitionDefault
						active={themeSelection !== "dark"}
						className="absolute right-0 flex flex-col flex-1 w-full h-full gap-8 tall:gap-4"
					>
						<HiOutlineMoon className="text-2xl" />
					</TransitionDefault>
				</div>
			</div>
		</div>
	);
};
