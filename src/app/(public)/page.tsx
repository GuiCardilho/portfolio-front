"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/shadcn/ui/carousel";
import { TransitionDefault } from "@/components/transition";
import { useHomeSection } from "@/store/homeSection";
import { useTheme } from "@/store/theme";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
	HiOutlineArrowCircleDown,
	HiOutlineArrowCircleRight,
	HiOutlineArrowCircleUp,
	HiOutlineFire,
} from "react-icons/hi";

export default function Page() {
	const { enabled: themeSelection } = useTheme();

	const [servicesOnHover, setServicesOnHover] = useState<number | null>(null);
	const [servicesClicked, setServicesClicked] = useState<number[]>([]);
	const [servicesOpen, setServicesOpen] = useState(false);

	const [api, setApi] = useState<CarouselApi>();

	const [currentSlider, setCurrentSlider] = useState(0);
	const [countSlider, setCountSlider] = useState(0);
	const [directionScroll, setDirectionScroll] = useState<"up" | "down" | null>("down");
	const [verifyScroll, setVerifyScroll] = useState(true);
	const [timeOut, setTimeOut] = useState<NodeJS.Timeout | null>(null);

	const { section } = useHomeSection();

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 2 && directionScroll === "up") {
			setDirectionScroll("down");

			if (api && api.selectedScrollSnap() < 3) {
				api.scrollTo(api.selectedScrollSnap() + 1);
			}

			return;
		}

		if (latest < 2 && directionScroll === "down") {
			setDirectionScroll("up");

			if (api && api.selectedScrollSnap() > 0) {
				api.scrollTo(api.selectedScrollSnap() - 1);
			}

			return;
		}

		if (latest !== 2) {
			setVerifyScroll(false);

			if (api && verifyScroll) {
				const selectedSnap = api.selectedScrollSnap();
				if (latest < 2 && selectedSnap >= 0) {
					api.scrollTo(selectedSnap - 1);
				} else if (latest > 2 && selectedSnap < 3) {
					api.scrollTo(selectedSnap + 1);
				}
			}
		}

		setTimeOut(
			setTimeout(() => {
				scrollY.set(2);
				window.scrollTo(0, 2);
				setVerifyScroll(true);
			}, 1000),
		);
		if (timeOut) {
			clearTimeout(timeOut);
		}
	});

	useEffect(() => {
		if (!api) {
			return;
		}
		setCountSlider(api.scrollSnapList().length - 1);
		setCurrentSlider(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrentSlider(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const handlePrevNext = () => {
		if (!api) {
			return;
		}

		if (directionScroll === "up") {
			api.scrollTo(currentSlider - 1);
			setCurrentSlider(currentSlider - 1);
		}

		if (directionScroll === "down") {
			api.scrollTo(currentSlider + 1);
			setCurrentSlider(currentSlider + 1);
		}

		if (currentSlider === 1 && directionScroll === "up") {
			setDirectionScroll("down");
		}

		if (countSlider - 1 === currentSlider && directionScroll === "down") {
			setDirectionScroll("up");
		}
	};

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

	const services = [
		{
			title: "Desenvolvimento Front-End Web",
			subtitle: "Especialidade em Front-End",
			description:
				"Ofereço serviços especializados em desenvolvimento front-end, utilizando as melhores tecnologias do mercado para criar websites rápidos e responsivos. Minhas principais ferramentas incluem Next e TailwindCSS, garantindo qualidade e eficiência no resultado final.",
		},
		{
			title: "Desenvolvimento Back-End Web",
			subtitle: "Experiência em Back-End",
			description:
				"Como desenvolvedor back-end experiente, posso criar APIs robustas e seguras para o seu projeto. Utilizo as melhores tecnologias, como NodeJS e ExpressJS, garantindo desempenho e confiabilidade.",
		},
		{
			title: "Desenvolvimento Full Stack Web",
			subtitle: "Expertise em Full Stack",
			description:
				"Destaco-me no desenvolvimento full stack, proporcionando soluções completas, desde o front-end até o back-end. Isso assegura a melhor experiência tanto para o usuário quanto para o desenvolvedor, abrangendo todas as fases do projeto.",
		},
		{
			title: "Suporte Técnico e Manutenção",
			subtitle: "Assistência Técnica Contínua",
			description:
				"Além do desenvolvimento, ofereço serviços de suporte técnico e manutenção para garantir que seu site esteja sempre operacional e atualizado. Sua tranquilidade é minha prioridade.",
		},
		{
			title: "Consultoria e Análise de Projetos",
			subtitle: "Orientação Estratégica",
			description:
				"Proporciono consultoria e análise de projetos, assegurando que seu empreendimento utilize as melhores práticas, tecnologias e ferramentas disponíveis. Meu objetivo é contribuir para o sucesso do seu projeto.",
		},
		{
			title: "Desenvolvimento Mobile",
			subtitle: "Criação de Aplicações Móveis",
			description:
				"Tenho experiência no desenvolvimento de aplicações móveis, utilizando tecnologias modernas para criar apps eficientes e intuitivos. Ofereço soluções que proporcionam uma experiência de usuário excepcional em dispositivos móveis.",
		},
		{
			title: "Integração de Sistemas",
			subtitle: "Conectividade Eficiente",
			description:
				"Especializado em integrar sistemas, proporciono soluções que permitem a comunicação eficiente entre diferentes componentes de software. Isso resulta em maior eficiência operacional e uma experiência integrada para os usuários.",
		},
		{
			title: "E-commerce",
			subtitle: "Soluções de Comércio Eletrônico",
			description:
				"Desenvolvo soluções de e-commerce personalizadas para atender às necessidades específicas do seu negócio. Desde a implementação de plataformas até a otimização da experiência de compra online, garanto um ambiente seguro e eficaz para transações comerciais.",
		},
	];

	const servicesHacker = [
		{
			title: "Front-End Stealth",
			subtitle: "Navegando nas Sombras",
			description:
				"Camuflando interfaces com destreza, transformo códigos em experiências sorrateiras usando Next e TailwindCSS. Uma fusão de elegância e obscuridade.",
		},
		{
			title: "Back-End Criptográfico",
			subtitle: "Algoritmos Invioláveis",
			description:
				"Mestre das artes obscuras do back-end, conjuro APIs invulneráveis com NodeJS e ExpressJS. Meus algoritmos são como feitiços, garantindo segurança e desempenho.",
		},
		{
			title: "Full Stack Infiltrado",
			subtitle: "Das Sombras à Luz",
			description:
				"Navego pelas sombras do full stack, criando soluções infiltradas. Do front ao back, transformo códigos em experiências que emergem das trevas.",
		},
		{
			title: "Suporte Criptônico",
			subtitle: "Guardião do Código",
			description:
				"Vigio as linhas de código como um guardião da noite. Ofereço suporte técnico criptônico 24/7 para manter a paz no reino digital.",
		},
		{
			title: "Consultor Hacker",
			subtitle: "Estratégias Infiltradas",
			description:
				"Como um consultor hacker, desvendo os mistérios do seu projeto. Oriento com estratégias infiltradas para garantir o sucesso no mundo digital.",
		},
		{
			title: "Mobile Hacker",
			subtitle: "Apps Invasivos",
			description:
				"Penetro no universo móvel com apps hacker. Desenvolvo aplicações que invadem as expectativas, proporcionando uma experiência única aos usuários.",
		},
		{
			title: "Integração Criptográfica",
			subtitle: "Conexões Inquebráveis",
			description:
				"Especializado em integrar sistemas com conexões inquebráveis. Faço a comunicação entre diferentes componentes de software parecer um código cifrado.",
		},
		{
			title: "E-commerce Hacker",
			subtitle: "Transações Sombrias",
			description:
				"Domino as sombras do comércio eletrônico, desenvolvendo soluções hacker para transações online. Sua loja virtual, agora sob proteção digital máxima.",
		},
	];

	useEffect(() => {
		console.log("section", section);
		if (!section) {
			return;
		}

		if (section === "inicio") {
			api?.scrollTo(0);
		} else if (section === "sobre") {
			api?.scrollTo(1);
		} else if (section === "servicos") {
			api?.scrollTo(2);
		} else if (section === "contato") {
			api?.scrollTo(3);
		}
	}, [section, api]);

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null; // return this null to avoid hydration errors
	}

	return (
		<div className="flex w-full h-full">
			<div
				className={clsx("fixed flex w-full h-full", {
					"bg-backgroundCustom-primary": themeSelection === "dark",
					"bg-foregroundCustom-primary": themeSelection === "light",
				})}
			>
				<Carousel
					orientation="vertical"
					opts={{
						align: "center",
						axis: "y",
						dragFree: true,
						loop: true,
						slidesToScroll: 1,
						containScroll: "trimSnaps",
						breakpoints: {
							"(max-width: 1024px)": {
								dragFree: true,
							},
						},
					}}
					setApi={setApi}
				>
					<CarouselContent className="-mt-1 w-full h-screen ">
						<CarouselItem
							className={clsx({
								"bg-backgroundCustom-primary text-white": themeSelection === "dark",
								"bg-foregroundCustom-primary text-black": themeSelection === "light",
							})}
						>
							<div
								className={clsx(
									" cursor-default h-full justify-around items-center flex flex-col lg:flex-row w-full shadow gap-8 lg:gap-4 py-20 px-4",
									{
										"bg-backgroundCustom-primary text-white": themeSelection === "dark",
										"bg-foregroundCustom-primary text-black": themeSelection === "light",
									},
								)}
							>
								<div className="flex flex-col gap-8 max-w-lg transition-all">
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
										<p className="text-zinc-400 text-sm">
											Eu sou um desenvolvedor Full Stack Web, com foco em ReactJS e NodeJS.
										</p>
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
									className={clsx(
										"hidden lg:flex rounded-full border-4 border-solid  relative overflow-hidden bg shadow-lg ",
										{
											"bg-backgroundCustom-primary text-white border-pink-300 shadow-violet-800":
												themeSelection === "dark",
											"bg-foregroundCustom-primary text-black border-blue-500 shadow-blue-600":
												themeSelection === "light",
										},
									)}
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
						</CarouselItem>
						<CarouselItem
							className={clsx({
								"bg-backgroundCustom-secondary text-white": themeSelection === "dark",
								"bg-foregroundCustom-secondary text-black": themeSelection === "light",
							})}
						>
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

								<div className="flex flex-col gap-8 max-w-lg font-bold ">
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
						</CarouselItem>
						<CarouselItem
							className={clsx({
								"bg-backgroundCustom-primary text-white": themeSelection === "dark",
								"bg-foregroundCustom-primary text-black": themeSelection === "light",
							})}
						>
							<div
								className={clsx("text-white justify-around items-center flex w-full shadow py-20 h-full", {
									"bg-backgroundCustom-primary text-white": themeSelection === "dark",
									"bg-foregroundCustom-primary text-black": themeSelection === "light",
								})}
							>
								<div className="flex flex-col gap-10 px-20">
									<div className="flex flex-col gap-2">
										<p
											className={clsx({
												"text-zinc-300": themeSelection === "dark",
												"text-zinc-600": themeSelection === "light",
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
												className={clsx("font-bold text-transparent bg-gradient-to-r bg-clip-text", {
													"from-violet-600 to-pink-400": themeSelection === "dark",
													"from-blue-500 to-cyan-600": themeSelection === "light",
												})}
											>
												Serviços.
											</span>
										</h1>
									</div>

									<div className="flex gap-6 flex-wrap h-full justify-start text-justify items-start">
										{themeSelection === "dark" ? (
											<>
												{servicesHacker.map((service, index) => (
													<button
														type="button"
														className={clsx(
															"hidden md:flex flex-col text-start duration-500 cursor-pointer justify-start items-start  min-h-[225px] p-4 rounded-md shadow gap-4  min-w-[300px] flex-1  transition-all  hover:scale-105 hover:bg-gradient-to-t !text-white ",
															{
																"bg-gradient-to-r from-violet-600 to-pink-400 ":
																	servicesOnHover === index ||
																	(servicesClicked.includes(index) && themeSelection === "dark"),
																"bg-zinc-800 text-white hover:ring-pink-300 hover:ring hover:ring-solid hover:shadow-violet-800 hover:from-violet-600 hover:via-violet-400 hover:to-pink-400":
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
														<p
															className={clsx("text-md", {
																"text-pink-400":
																	servicesOnHover !== index && index % 2 === 0 && themeSelection === "dark",
																"text-violet-400":
																	servicesOnHover !== index && index % 2 !== 0 && themeSelection === "dark",
																"!text-white":
																	servicesOnHover === index ||
																	(servicesClicked.includes(index) && themeSelection === "dark"),
															})}
														>
															{service.subtitle}
														</p>

														<h2
															className={clsx("text-lg uppercase font-bold justify-start items-start ", {
																"text-white": servicesOnHover === index || themeSelection === "dark",
															})}
														>
															{service.title}
														</h2>

														<p
															className={clsx("text-sm leading-6 justify-start items-center flex ", {
																"!text-white":
																	(servicesOnHover === index || servicesClicked.includes(index)) &&
																	themeSelection === "dark",
																"text-zinc-300": themeSelection === "dark",
															})}
														>
															{service.description}
														</p>
													</button>
												))}

												{services.map((service, index) => {
													if (index > 4 && !servicesOpen) return;
													return (
														<button
															type="button"
															className={clsx(
																" flex md:hidden flex-col flex-1 text-start duration-500 cursor-pointer p-4 rounded-md shadow gap-4 justify-start items-start  min-w-[300px] transition-all  hover:scale-105 hover:bg-gradient-to-t !text-white ",
																{
																	"bg-gradient-to-r from-violet-600 to-pink-400 ":
																		servicesOnHover === index ||
																		(servicesClicked.includes(index) && themeSelection === "dark"),
																	"bg-zinc-800 text-white hover:shadow-violet-700 hover:ring-pink-300 hover:ring hover:ring-solid hover:from-violet-600 hover:via-violet-400 hover:to-pink-400":
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
															<p
																className={clsx("text-md", {
																	"text-pink-400":
																		servicesOnHover !== index && index % 2 === 0 && themeSelection === "dark",
																	"text-violet-400":
																		servicesOnHover !== index && index % 2 !== 0 && themeSelection === "dark",
																	"!text-white":
																		servicesOnHover === index ||
																		(servicesClicked.includes(index) && themeSelection === "dark"),
																})}
															>
																{service.subtitle}
															</p>

															<h2
																className={clsx("text-lg uppercase font-bold justify-start items-start ", {
																	"text-white": servicesOnHover === index || themeSelection === "dark",
																})}
															>
																{service.title}
															</h2>

															<p
																className={clsx("text-sm leading-6 justify-start items-center flex ", {
																	"!text-white":
																		(servicesOnHover === index || servicesClicked.includes(index)) &&
																		themeSelection === "dark",
																})}
															>
																{service.description}
															</p>
														</button>
													);
												})}
											</>
										) : (
											<>
												{services.map((service, index) => (
													<button
														type="button"
														className={clsx(
															"hidden md:flex flex-col text-start duration-500 cursor-pointer justify-start items-start  min-h-[325px] p-4 rounded-md shadow gap-4  min-w-[300px] flex-1  transition-all  hover:scale-105 hover:bg-gradient-to-t !text-white ",
															{
																"bg-gradient-to-r from-blue-500 to-cyan-600 ":
																	servicesOnHover === index ||
																	(servicesClicked.includes(index) && themeSelection === "light"),
																"bg-zinc-200 text-black hover:shadow-blue-500 hover:ring-blue-300 hover:ring hover:ring-solid  hover:from-blue-300 hover:via-cyan-400 hover:to-cyan-500":
																	themeSelection === "light",
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
														<p
															className={clsx("text-md", {
																"text-blue-500":
																	servicesOnHover !== index && index % 2 === 0 && themeSelection === "light",
																"text-cyan-600":
																	servicesOnHover !== index && index % 2 !== 0 && themeSelection === "light",
																"!text-black":
																	servicesOnHover === index ||
																	(servicesClicked.includes(index) && themeSelection === "light"),
															})}
														>
															{service.subtitle}
														</p>

														<h2
															className={clsx("text-lg uppercase font-bold justify-start items-start ", {
																"text-black": themeSelection === "light",
															})}
														>
															{service.title}
														</h2>

														<p
															className={clsx("text-sm leading-6 justify-start items-center flex ", {
																"!text-black":
																	(servicesOnHover === index || servicesClicked.includes(index)) &&
																	themeSelection === "light",
																"text-zinc-600": themeSelection === "light",
															})}
														>
															{themeSelection === "light" && service.description}
														</p>
													</button>
												))}

												{services.map((service, index) => {
													if (index > 4 && !servicesOpen) return;
													return (
														<button
															type="button"
															className={clsx(
																" flex md:hidden flex-col flex-1 text-start duration-500 cursor-pointer p-4 rounded-md shadow gap-4 justify-start items-start  min-w-[300px] transition-all  hover:scale-105 hover:bg-gradient-to-t !text-white ",
																{
																	"bg-gradient-to-r from-blue-500 to-cyan-600 ":
																		servicesOnHover === index ||
																		(servicesClicked.includes(index) && themeSelection === "light"),
																	"bg-zinc-200 text-black hover:shadow-blue-500 hover:from-blue-500 hover:ring-blue-300 hover:ring hover:ring-solid  hover:via-cyan-600 hover:to-cyan-800":
																		themeSelection === "light",
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
															<p
																className={clsx("text-md", {
																	"text-blue-500":
																		servicesOnHover !== index && index % 2 === 0 && themeSelection === "light",
																	"text-cyan-600":
																		servicesOnHover !== index && index % 2 !== 0 && themeSelection === "light",
																	"!text-black":
																		servicesOnHover === index ||
																		(servicesClicked.includes(index) && themeSelection === "light"),
																})}
															>
																{service.subtitle}
															</p>

															<h2
																className={clsx("text-lg uppercase font-bold justify-start items-start ", {
																	"text-black": themeSelection === "light",
																})}
															>
																{service.title}
															</h2>

															<p
																className={clsx("text-sm leading-6 justify-start items-center flex ", {
																	"!text-black":
																		(servicesOnHover === index || servicesClicked.includes(index)) &&
																		themeSelection === "light",
																	"text-zinc-600": themeSelection === "light",
																})}
															>
																{themeSelection === "light" && service.description}
															</p>
														</button>
													);
												})}
											</>
										)}

										<button
											type="button"
											className={clsx(
												" flex md:hidden flex-col flex-1 justify-start items-start duration-500 cursor-pointer  p-4 rounded-md shadow gap-4  min-w-[300px]  transition-all  hover:scale-105 hover:bg-gradient-to-t   ",
												{
													"bg-gradient-to-r from-violet-600 to-pink-400":
														(servicesOnHover === services.length + 1 ||
															servicesClicked.includes(services.length + 1)) &&
														themeSelection === "dark",
													"bg-gradient-to-r from-blue-500 to-cyan-600":
														(servicesOnHover === services.length + 1 ||
															servicesClicked.includes(services.length + 1)) &&
														themeSelection === "light",
												},
												{
													"bg-zinc-800  hover:shadow-violet-700 hover:from-violet-600 hover:via-violet-400 hover:to-pink-400 !text-white ":
														themeSelection === "dark",
													"bg-zinc-200 text-black": themeSelection === "light",
												},
											)}
											key={services.length + 1}
											onMouseEnter={() => {
												setServicesOnHover(services.length + 1);
											}}
											onMouseLeave={() => {
												setServicesOnHover(null);
											}}
											onClick={() => {
												setServicesOpen((prev) => !prev);

												if (!servicesClicked.includes(services.length + 1)) {
													setServicesClicked((prev) => [...prev, services.length + 1]);
												} else {
													setServicesClicked((prev) => prev.filter((item) => item !== services.length + 1));
												}
											}}
										>
											<p
												className={clsx("text-md justify-start items-start flex w-full", {
													"text-pink-400":
														servicesOnHover !== services.length + 1 &&
														services.length + (1 % 2) === 0 &&
														themeSelection === "dark",
													"text-violet-400":
														servicesOnHover !== services.length + 1 &&
														services.length + (1 % 2) !== 0 &&
														themeSelection === "dark",
													"!text-white":
														(servicesOnHover === services.length + 1 ||
															servicesClicked.includes(services.length + 1)) &&
														themeSelection === "dark",

													"text-blue-500":
														servicesOnHover !== services.length + 1 &&
														services.length + (1 % 2) === 0 &&
														themeSelection === "light",
													"text-cyan-600":
														servicesOnHover !== services.length + 1 &&
														services.length + (1 % 2) !== 0 &&
														themeSelection === "light",
													"!text-black":
														(servicesOnHover === services.length + 1 ||
															servicesClicked.includes(services.length + 1)) &&
														themeSelection === "light",
												})}
											>
												{servicesOpen ? "Fechar" : "Ver Mais"}
											</p>
										</button>
									</div>
								</div>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>

				<TransitionDefault
					active={directionScroll === "up"}
					className="flex flex-col gap-2 justify-center items-center absolute bottom-8 flex-nowrap right-1/2 left-1/2 transform traslate-x-1/2 "
				>
					<button
						type="button"
						className={clsx(
							"animate-bounce items-center flex flex-col cursor-pointer  justify-center z-20 flex-nowrap absolute line-clamp-1 truncate",
							{
								"text-white": themeSelection === "dark",
								"text-black": themeSelection === "light",
							},
						)}
						onClick={() => {
							handlePrevNext();
						}}
					>
						Verificar Informações
						<HiOutlineArrowCircleUp size={24} />
					</button>
				</TransitionDefault>

				<TransitionDefault
					active={directionScroll === "down"}
					className="flex flex-col gap-2 justify-center items-center absolute bottom-8 flex-nowrap right-1/2 left-1/2 transform traslate-x-1/2"
				>
					<button
						type="button"
						className={clsx(
							"animate-bounce items-center flex flex-col cursor-pointer  justify-center z-20 flex-nowrap absolute line-clamp-1 truncate font-bold",
							{
								"text-white": themeSelection === "dark",
								"text-black ": themeSelection === "light",
							},
						)}
						onClick={() => {
							handlePrevNext();
						}}
					>
						Saiba Mais
						<HiOutlineArrowCircleDown size={24} />
					</button>
				</TransitionDefault>
			</div>
			<div className="h-[1000px] 	" />
		</div>
	);
}
