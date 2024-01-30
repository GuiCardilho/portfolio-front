"use client";
import { useTheme } from "@/store/theme";
import { Switch } from "@headlessui/react";

import { useHomeSection } from "@/store/homeSection";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { HiFaceSmile, HiOutlineFaceSmile } from "react-icons/hi2";
import { IoSkull, IoSkullOutline } from "react-icons/io5";
import { TransitionDefault } from "../transition";

export const Navbar = () => {
	const { enabled: themeSelection, toggle } = useTheme();

	const links = [
		{
			name: "Inicio",
			to: "inicio",
		},
		{
			name: "Sobre",
			to: "sobre",
		},
		{
			name: "Serviços",
			to: "servicos",
		},
		{
			name: "Contato",
			to: "contato",
		},
	];

	const { setSection } = useHomeSection();

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	return (
		<div
			className={clsx("flex justify-around py-4 fixed z-10 w-full", {
				"bg-backgroundCustom-primary text-white": themeSelection === "dark",
				"bg-foregroundCustom-primary text-black shadow-lg border-b-1 border-solid border-zinc-200":
					themeSelection === "light",
			})}
			suppressHydrationWarning
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

			<div
				className={clsx("font-bold sm:hidden text-transparent bg-gradient-to-r  bg-clip-text", {
					"from-violet-600 to-pink-400": themeSelection === "dark",
					"from-blue-500 to-cyan-600": themeSelection === "light",
				})}
			>
				GC
			</div>

			<div>
				<ul className="gap-6 font-medium hidden sm:flex">
					{links.map((link) => (
						<li key={link.name}>
							<button
								type="button"
								className={clsx("cursor-pointer transition-all font-medium", {
									"font-bold text-transparent bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text":
										link.to === "/" && themeSelection === "dark",

									"hover:text-violet-500 active:text-violet-400": link.to !== "/" && themeSelection === "dark",
									"from-violet-600 to-pink-400": themeSelection === "dark",

									"font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text":
										link.to === "/" && themeSelection === "light",
									"hover:text-blue-500 active:text-cyan-600": link.to !== "/" && themeSelection === "light",
									"from-blue-500 to-cyan-600": themeSelection === "light",
								})}
								onClick={() => setSection(link.to)}
							>
								{link.name}
							</button>
						</li>
					))}
				</ul>
			</div>

			<div className="flex  gap-1 sm:gap-5 justify-between" id="DarkMode">
				<div className="relative w-6">
					<TransitionDefault active={themeSelection !== "dark"} className="absolute left-0">
						<HiFaceSmile className="text-2xl text-yellow-400 flex flex-col flex-1 w-full h-full gap-8 tall:gap-4" />
					</TransitionDefault>

					<TransitionDefault
						active={themeSelection === "dark"}
						className="absolute left-0 flex flex-col flex-1 w-full h-full gap-8 tall:gap-4"
					>
						<HiOutlineFaceSmile className="text-2xl" />
					</TransitionDefault>
				</div>

				<Switch
					checked={themeSelection === "dark"}
					onChange={toggle}
					className={`${
						themeSelection === "dark" ? "bg-red-700" : "bg-yellow-400"
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
						<IoSkull className="text-2xl text-red-600" />
					</TransitionDefault>

					<TransitionDefault
						active={themeSelection !== "dark"}
						className="absolute right-0 flex flex-col flex-1 w-full h-full gap-8 tall:gap-4"
					>
						<IoSkullOutline className="text-2xl" />
					</TransitionDefault>
				</div>
			</div>
		</div>
	);
};
