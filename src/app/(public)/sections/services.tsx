import { Carousel, CarouselContent, CarouselItem, CarouselProps } from "@/components/shadcn/ui/carousel";
import { useTheme } from "@/store/theme";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import {
	HiOutlineChatBubbleLeftRight,
	HiOutlineCodeBracket,
	HiOutlineDevicePhoneMobile,
	HiOutlineLink,
	HiOutlineServer,
	HiOutlineShoppingCart,
	HiOutlineWindow,
	HiOutlineWrench,
} from "react-icons/hi2";

export const HomeSectionServices = () => {
	const { enabled: themeSelection } = useTheme();
	const [servicesOnHover, setServicesOnHover] = useState<number | null>(null);
	const [servicesClicked, setServicesClicked] = useState<number[]>([]);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [sertviceList, setSertviceList] = useState<
		{
			title: string;
			subtitle: string;
			icon: JSX.Element;
		}[]
	>([]);

	const services = [
		{
			icon: <HiOutlineCodeBracket className="text-4xl" />,
			title: "Desenvolvimento Front-End Web",
			subtitle: "Especialidade em Front-End",
		},
		{
			icon: <HiOutlineServer className="text-4xl" />,
			title: "Desenvolvimento Back-End Web",
			subtitle: "Experiência em Back-End",
		},
		{
			icon: <HiOutlineWindow className="text-4xl" />,
			title: "Desenvolvimento Full Stack Web",
			subtitle: "Expertise em Full Stack",
		},
		{
			icon: <HiOutlineWrench className="text-4xl" />,
			title: "Suporte Técnico e Manutenção",
			subtitle: "Assistência Técnica Contínua",
		},
		{
			icon: <HiOutlineChatBubbleLeftRight className="text-4xl" />,
			title: "Consultoria e Análise de Projetos",
			subtitle: "Orientação Estratégica",
		},
		{
			icon: <HiOutlineDevicePhoneMobile className="text-4xl" />,
			title: "Desenvolvimento Mobile",
			subtitle: "Criação de Aplicações Móveis",
		},
		{
			icon: <HiOutlineLink className="text-4xl" />,
			title: "Integração de Sistemas",
			subtitle: "Conectividade Eficiente",
		},
		{
			icon: <HiOutlineShoppingCart className="text-4xl" />,
			title: "E-commerce",
			subtitle: "Soluções de Comércio Eletrônico",
		},
	];

	const servicesHacker = [
		{
			icon: <HiOutlineCodeBracket className="text-4xl" />,
			title: "Front-End Stealth",
			subtitle: "Navegando nas Sombras",
		},
		{
			icon: <HiOutlineServer className="text-4xl" />,
			title: "Back-End Criptográfico",
			subtitle: "Algoritmos Invioláveis",
		},
		{
			icon: <HiOutlineWindow className="text-4xl" />,
			title: "Full Stack Infiltrado",
			subtitle: "Das Sombras à Luz",
		},
		{
			icon: <HiOutlineWrench className="text-4xl" />,
			title: "Suporte Criptônico",
			subtitle: "Guardião do Código",
		},
		{
			icon: <HiOutlineChatBubbleLeftRight className="text-4xl" />,
			title: "Consultor Hacker",
			subtitle: "Estratégias Infiltradas",
		},
		{
			icon: <HiOutlineDevicePhoneMobile className="text-4xl" />,
			title: "Mobile Hacker",
			subtitle: "Apps Invasivos",
		},
		{
			icon: <HiOutlineLink className="text-4xl" />,
			title: "Integração Criptográfica",
			subtitle: "Conexões Inquebráveis",
		},
		{
			icon: <HiOutlineShoppingCart className="text-4xl" />,
			title: "E-commerce Hacker",
			subtitle: "Transações Sombrias",
		},
	];

	const carouselOps: Partial<CarouselProps["opts"]> = {
		align: "center",
		axis: "x",
		dragFree: false,
		loop: true,
		slidesToScroll: 2,
		containScroll: "trimSnaps",
		breakpoints: {
			"(max-width: 1024px)": {
				dragFree: true,
			},
		},
	};

	useEffect(() => {
		setSertviceList(themeSelection === "dark" ? servicesHacker : services);
	}, [themeSelection]);

	return (
		<div
			className={clsx(
				"text-white justify-around items-start flex w-full shadow  h-full overflow-hidden bg-gradient-to-r",
				{
					"from-violet-300 to-pink-300 text-white": themeSelection === "dark",
					"from-blue-500 via-blue-300 to-cyan-600 text-black": themeSelection === "light",
				},
			)}
		>
			<div className="flex flex-col">
				<div className="flex flex-col gap-2 px-20 py-14">
					<p
						className={clsx({
							"text-white font-medium": themeSelection === "dark",
							"text-zinc-800 font-bold": themeSelection === "light",
						})}
					>
						Serviços que já prestei para empresas e clientes
					</p>

					<h1
						className={clsx("text-3xl sm:text-5xl l font-bold", {
							"text-white": themeSelection === "dark",
							"text-zinc-800 font-bold ": themeSelection === "light",
						})}
					>
						Meus{" "}
						<span
							className={clsx("font-bold text-transparent bg-gradient-to-r bg-clip-text drop-shadow-sm shadow-white ", {
								"from-violet-800 to-pink-950": themeSelection === "dark",
								"from-blue-800 to-cyan-950": themeSelection === "light",
							})}
						>
							Serviços.
						</span>
					</h1>
				</div>

				<div className="flex gap-6 h-full justify-start text-justify items-start max-w-max overflow-hidden">
					<Carousel
						opts={carouselOps}
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
						className={clsx("py-8  h-full bg-gradient-to-r ")}
						style={{ width: "100%", maxWidth: "99.99vw" }}
					>
						<CarouselContent className="-mt-1 py-14 h-full">
							{sertviceList.map((service, index) => {
								return (
									<CarouselItem key={`${service.title}-${index}`} className="basis-1/1 md:1/2 lg:basis-1/3 xl:1/5">
										<button
											type="button"
											className={clsx(
												"flex flex-col h-[400px] text-center w-full duration-500 cursor-pointer justify-center items-center p-4 rounded-md shadow gap-8 transition-all hover:scale-105",
												{
													"bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-200":
														(servicesOnHover === index || servicesClicked.includes(index)) &&
														themeSelection === "light",
													"bg-zinc-100 text-black hover:shadow-blue-300 hover:ring-blue-200 hover:ring hover:ring-solid":
														themeSelection === "light",

													"bg-gradient-to-r text-white from-violet-300 to-pink-400":
														(servicesOnHover === index || servicesClicked.includes(index)) && themeSelection === "dark",
													"bg-zinc-100 text-black hover:shadow-violet-800 hover:ring-pink-200 hover:ring hover:ring-solid":
														themeSelection === "dark",
												},
											)}
											key={service.title}
											onMouseEnter={() => {
												setServicesOnHover(index);
											}}
											onMouseLeave={() => {
												setServicesOnHover(null);
											}}
											onClick={() => {
												if (!servicesClicked.includes(index)) {
													setServicesClicked((prev) => [...prev, index]);
												} else {
													setServicesClicked((prev) => prev.filter((item) => item !== index));
												}
											}}
										>
											<div
												className={clsx("flex justify-center items-center p-4 rounded-full transition-all", {
													"text-black transition-all bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-200 ":
														themeSelection === "light",
													"!bg-white bg-gradient-to-r transition-all from-white via-white to-white":
														(servicesOnHover === index || servicesClicked.includes(index)) &&
														themeSelection === "light",

													"transition-all bg-gradient-to-r from-violet-800 via-violet-800 to-pink-400  text-white":
														themeSelection === "dark",
													"!bg-white bg-gradient-to-r transition-all from-violet-950 via-violet-950 to-violet-950 ":
														(servicesOnHover === index || servicesClicked.includes(index)) && themeSelection === "dark",
												})}
											>
												{service.icon}
											</div>
											<div>
												<h2
													className={clsx("text-lg uppercase font-bold justify-start items-start ", {
														"text-black": themeSelection === "light",
													})}
												>
													{service.title}
												</h2>
												<p className={clsx("text-md text-black")}>{service.subtitle}</p>
											</div>
										</button>
									</CarouselItem>
								);
							})}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</div>
	);
};
