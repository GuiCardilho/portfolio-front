"use client";
import { Switch } from "@headlessui/react";
import { useTheme } from "@/store/theme";

import { HiMoon, HiOutlineMoon, HiSun, HiOutlineSun } from "react-icons/hi";
import { TransitionDefault } from "../transition";
import clsx from "clsx";

export const Navbar = () => {
	const { enabled, toggle } = useTheme();

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
		<div className="bg-background-primary flex justify-around py-4 text-white">
			<div className="font-bold hidden sm:flex gap-2">
				Guilherme
				<span className="text-transparent bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text">Cardilho</span>
			</div>

			<div className="font-bold sm:hidden text-transparent bg-gradient-to-r from-violet-200 to-pink-300 bg-clip-text">
				GC
			</div>

			<div>
				<ul className="gap-6 font-medium hidden sm:flex">
					{links.map((link, index) => (
						<li
							key={index}
							className={clsx("cursor-pointer transition-all font-medium", {
								"font-bold text-transparent bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text":
									link.href === "/",
								"hover:text-violet-500 active:text-violet-400": link.href !== "/",
							})}
						>
							{link.name}
						</li>
					))}
				</ul>
			</div>

			<div className="flex  gap-1 sm:gap-5 justify-between">
				<div className="relative w-6">
					<TransitionDefault active={!enabled} className="absolute left-0">
						<HiSun className="text-2xl text-yellow-400" />
					</TransitionDefault>

					<TransitionDefault active={enabled} className="absolute left-0">
						<HiOutlineSun className="text-2xl" />
					</TransitionDefault>
				</div>

				<Switch
					checked={enabled}
					onChange={toggle}
					className={`${
						enabled ? "bg-gray-400" : "bg-yellow-400"
					} relative inline-flex h-6 w-11 items-center rounded-full`}
				>
					<span className="sr-only">Enable notifications</span>
					<span
						className={`${
							enabled ? "translate-x-6" : "translate-x-1"
						} inline-block h-4 w-4 transform rounded-full bg-white transition`}
					/>
				</Switch>

				<div className="relative w-6 ">
					<TransitionDefault active={enabled} className="absolute right-0">
						<HiMoon className="text-2xl" />
					</TransitionDefault>

					<TransitionDefault active={!enabled} className="absolute right-0">
						<HiOutlineMoon className="text-2xl" />
					</TransitionDefault>
				</div>
			</div>
		</div>
	);
};
