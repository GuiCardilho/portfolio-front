import { CarouselApi } from "@/components/shadcn/ui/carousel";
import { useTheme } from "@/store/theme";
import clsx from "clsx";
import Image from "next/image";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiOutlineFire } from "react-icons/hi2";

interface IProps {
	api: CarouselApi;
}

export const HomeSectionInitial = ({ api }: IProps) => {
	const { enabled: themeSelection } = useTheme();

	return (
		<div
			className={clsx(
				" cursor-default h-full justify-around items-center flex flex-col lg:flex-row w-full shadow gap-8 lg:gap-4 py-20 px-4",
				{
					"bg-backgroundCustom-primary text-white": themeSelection === "dark",
					"bg-foregroundCustom-primary text-black": themeSelection === "light",
				},
			)}
		>
			<div className="flex flex-col gap-8 max-w-lg transition-all text-center justify-center items-center sm:text-start sm:justify-start sm:items-start">
				<p
					className={clsx("text-lg", {
						"text-pink-300 !text-3xl ": themeSelection === "dark",
						"text-zinc-600 font-medium": themeSelection === "light",
					})}
				>
					{themeSelection === "dark" ? "Deixe a procrastinação para trás" : "Olá, meu nome é Guilherme"}
				</p>

				<h1 className="text-3xl sm:text-5xl font-bold">
					{themeSelection === "dark" ? "É hora de programar o seu " : "Sou um desenvolvedor "}

					{themeSelection === "light" && <br />}
					<span
						className={clsx("font-bold text-transparent bg-clip-text bg-gradient-to-r", {
							" from-violet-600 to-pink-400": themeSelection === "dark",
							" from-blue-500 to-cyan-600": themeSelection === "light",
						})}
					>
						{themeSelection === "dark" ? "amanhã. " : "Full Stack."}
					</span>
				</h1>

				{themeSelection === "light" && (
					<p className="text-zinc-400 text-sm">Eu sou um desenvolvedor Full Stack Web, com foco em ReactJS e NodeJS.</p>
				)}

				<button
					type="button"
					className={clsx(
						" cursor-pointer px-5 py-3 rounded flex gap-4 justify-center items-center w-fit  shadow bg-gradient-to-r font-bold transition-all duration-700 ease-in-out transform hover:scale-105",
						{
							"bg-violet-400 from-violet-600 to-pink-400 hover:shadow-violet-300 hover:from-violet-400 hover:via-pink-400 hover:to-pink-600":
								themeSelection === "dark",
							"text-white bg-blue-500 from-blue-300 to-cyan-500 hover:shadow-blue-400 hover:from-blue-300 hover:via-cyan-500 hover:to-cyan-600":
								themeSelection === "light",
						},
					)}
					onClick={() => {
						if (api) {
							if (themeSelection === "dark") {
								api.scrollTo(2);
							} else {
								api.scrollTo(1);
							}
						}
					}}
				>
					{themeSelection === "light" ? (
						<>
							Confira mais sobre mim
							<HiOutlineArrowCircleRight size={20} />
						</>
					) : (
						<>
							<HiOutlineFire size={20} />
							Confira meus serviços
						</>
					)}
				</button>
			</div>

			<div
				className={clsx("hidden lg:flex rounded-full border-4 border-solid  relative overflow-hidden bg shadow-lg ", {
					"bg-backgroundCustom-primary text-white border-pink-300 shadow-violet-800": themeSelection === "dark",
					"bg-foregroundCustom-primary text-black border-blue-500 shadow-blue-600": themeSelection === "light",
				})}
			>
				<Image
					src={themeSelection === "dark" ? "/avatar_dark.png" : "/avatar_light.png"}
					priority
					alt="Hero"
					className="w-[250px]  h-[250px] sm:w-[500px] sm:h-[500px]"
					height={800}
					width={800}
				/>
			</div>
		</div>
	);
};
