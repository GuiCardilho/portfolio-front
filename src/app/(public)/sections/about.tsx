import { useTheme } from "@/store/theme";
import clsx from "clsx";
import Image from "next/image";

export const HomeSectionAbout = () => {
	const { enabled: themeSelection } = useTheme();

	const skills = [
		{
			label: "NextJS",
			className: clsx({
				"bg-gradient-to-r from-violet-600 to-pink-400 font-medium": themeSelection === "dark",
				"bg-gradient-to-r from-blue-500 to-cyan-600 font-medium": themeSelection === "light",
			}),
		},
		{
			label: "ReactJS",
		},
		{
			label: "NodeJS",
			className: clsx({
				"bg-gradient-to-r from-violet-600 to-pink-400 font-medium": themeSelection === "dark",
				"bg-gradient-to-r from-blue-500 to-cyan-600 font-medium": themeSelection === "light",
			}),
		},

		{
			label: "Javascript",
		},
		{
			label: "Typescript",
			className: clsx({
				"bg-gradient-to-r from-violet-600 to-pink-400 font-medium": themeSelection === "dark",
				"bg-gradient-to-r from-blue-500 to-cyan-600 font-medium": themeSelection === "light",
			}),
		},
		{
			label: "HTML",
		},
		{
			label: "TailwindCSS",
			className: clsx({
				"bg-gradient-to-r from-violet-600 to-pink-400 font-medium": themeSelection === "dark",
				"bg-gradient-to-r from-blue-500 to-cyan-600 font-medium": themeSelection === "light",
			}),
		},
		{
			label: "CSS",
		},
		{
			label: "ExpressJS",
			className: clsx({
				"bg-gradient-to-r from-violet-600 to-pink-400 font-medium": themeSelection === "dark",
				"bg-gradient-to-r from-blue-500 to-cyan-600 font-medium": themeSelection === "light",
			}),
		},
		{
			label: "SQL",
		},
		{
			label: "NoSQL",
			className: clsx({
				"bg-gradient-to-r from-violet-600 to-pink-400 font-medium": themeSelection === "dark",
				"bg-gradient-to-r from-blue-500 to-cyan-600 font-medium": themeSelection === "light",
			}),
		},
		{
			label: "MySQL",
		},
		{
			label: "AWS",
			className: clsx({
				"bg-gradient-to-r from-violet-600 to-pink-400 font-medium": themeSelection === "dark",
				"bg-gradient-to-r from-blue-500 to-cyan-600 font-medium": themeSelection === "light",
			}),
		},
		{
			label: "Git",
		},
		{
			label: "JWT",
		},
		{
			label: "Crypto",
		},
		{
			label: "Docker",
		},
		{
			label: "Zustand",
		},
		{
			label: "React Query",
			className: clsx({
				"bg-gradient-to-r from-violet-600 to-pink-400 font-medium": themeSelection === "dark",
				"bg-gradient-to-r from-blue-500 to-cyan-600 font-medium": themeSelection === "light",
			}),
		},
	];

	return (
		<div
			className={clsx(
				"cursor-default h-full text-white justify-around items-center flex flex-col lg:flex-row w-full shadow gap-8 lg:gap-4 py-20 px-4",
				{
					"bg-backgroundCustom-secondary text-white": themeSelection === "dark",
					"bg-foregroundCustom-secondary	 text-black": themeSelection === "light",
				},
			)}
		>
			<div
				className={clsx("rounded-full border-4 border-solid  relative overflow-hidden bg shadow-lg ", {
					"bg-zinc-800 text-white border-pink-300 shadow-violet-800": themeSelection === "dark",
					"bg-zinc-200 text-black border-blue-500 shadow-blue-600": themeSelection === "light",
				})}
			>
				<Image
					src={themeSelection === "dark" ? "/avatar_dark_2.jpeg" : "/avatar_light_2.png"}
					priority
					alt="Hero"
					className="w-[250px]  h-[250px] sm:w-[500px] sm:h-[500px]"
					height={800}
					width={800}
				/>
			</div>

			<div className="flex flex-col gap-8 max-w-lg font-bold sm:p-0 p-4 sm:text-start text-justify">
				<p
					className={clsx("text-lg", {
						"text-white": themeSelection === "dark",
						"text-zinc-800 font-medium": themeSelection === "light",
					})}
				>
					Sobre Mim
				</p>

				<h1
					className={clsx("text-3xl sm:text-5xl  font-bold", {
						"text-white": themeSelection === "dark",
						"text-zinc-800 font-bold ": themeSelection === "light",
					})}
				>
					Guilherme{" "}
					<span
						className={clsx("font-bold text-transparent bg-gradient-to-r  bg-clip-text", {
							"from-violet-600 to-pink-400": themeSelection === "dark",
							"from-blue-500 to-cyan-600": themeSelection === "light",
						})}
					>
						Cardilho
					</span>
				</h1>

				<p
					className={clsx("text-sm leading-7", {
						"text-pink-300 font-medium": themeSelection === "dark",
						"text-zinc-600": themeSelection === "light",
					})}
				>
					{themeSelection === "light"
						? `Olá, meu nome é Guilherme Cardilho, sou desenvolvedor web Full Stack, com foco em ReactJS e NodeJS a
										2 anos e sou apaixonado por tecnologia e inovação, por isso sempre estou buscando novos
										conhecimentos e desafios.`
						: `
											Eaí, beleza? Sou o cara dos códigos mágicos, o alquimista da web! 🚀 Se sua ideia é um tesouro escondido, eu sou o Indiana Jones do desenvolvimento, pronto para desbravar os bits e bytes e transformar tudo em algo incrível!
											`}
				</p>

				<div className="flex gap-4 flex-col">
					<p
						className={clsx("font-medium", {
							"text-white": themeSelection === "dark",
							"text-zinc-800 !font-bold": themeSelection === "light",
						})}
					>
						{" "}
						Minhas Principais Habilidades:{" "}
					</p>

					<div className="flex flex-1 flex-wrap gap-2 ">
						{skills.map((skill) => (
							<div
								key={skill.label}
								className={clsx(`flex px-2 py-1  rounded-sm ${skill.className || ""} text-white`, {
									"bg-zinc-600": themeSelection === "dark",
									"bg-zinc-400": themeSelection === "light",
								})}
							>
								{skill.label}
							</div>
						))}
					</div>
				</div>

				{/* <button className="bg-violet-500 px-5 py-3 rounded flex gap-4 justify-center items-center w-fit shadow-violet-300 shadow">
                        Saiba Mais
                        <HiOutlineArrowCircleRight size={20} />
                    </button> */}
			</div>
		</div>
	);
};
