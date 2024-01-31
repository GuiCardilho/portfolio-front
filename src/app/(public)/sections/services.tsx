import { useTheme } from "@/store/theme";
import clsx from "clsx";
import { useState } from "react";

export const HomeSectionServices = () => {
	const { enabled: themeSelection } = useTheme();
	const [servicesOnHover, setServicesOnHover] = useState<number | null>(null);
	const [servicesClicked, setServicesClicked] = useState<number[]>([]);
	const [servicesOpen, setServicesOpen] = useState(false);

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

	return (
		<div
			className={clsx("text-white justify-around items-center flex w-full shadow py-20 h-full", {
				"bg-backgroundCustom-primary text-white": themeSelection === "dark",
				"bg-foregroundCustom-primary text-black": themeSelection === "light",
			})}
		>
			<div className="flex flex-col gap-10 sm:px-20 p-8">
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
											" bg-gradient-to-r from-violet-600 to-pink-400 ":
												servicesOnHover === index || (servicesClicked.includes(index) && themeSelection === "dark"),
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
											"text-pink-400": servicesOnHover !== index && index % 2 === 0 && themeSelection === "dark",
											"text-violet-400": servicesOnHover !== index && index % 2 !== 0 && themeSelection === "dark",
											"!text-white":
												servicesOnHover === index || (servicesClicked.includes(index) && themeSelection === "dark"),
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
												(servicesOnHover === index || servicesClicked.includes(index)) && themeSelection === "dark",
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
													servicesOnHover === index || (servicesClicked.includes(index) && themeSelection === "dark"),
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
												"text-pink-400": servicesOnHover !== index && index % 2 === 0 && themeSelection === "dark",
												"text-violet-400": servicesOnHover !== index && index % 2 !== 0 && themeSelection === "dark",
												"!text-white":
													servicesOnHover === index || (servicesClicked.includes(index) && themeSelection === "dark"),
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
													(servicesOnHover === index || servicesClicked.includes(index)) && themeSelection === "dark",
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
												servicesOnHover === index || (servicesClicked.includes(index) && themeSelection === "light"),
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
											"text-blue-500": servicesOnHover !== index && index % 2 === 0 && themeSelection === "light",
											"text-cyan-600": servicesOnHover !== index && index % 2 !== 0 && themeSelection === "light",
											"!text-black":
												servicesOnHover === index || (servicesClicked.includes(index) && themeSelection === "light"),
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
												(servicesOnHover === index || servicesClicked.includes(index)) && themeSelection === "light",
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
												"text-white bg-gradient-to-r from-blue-500 to-cyan-800 ":
													servicesOnHover === index || (servicesClicked.includes(index) && themeSelection === "light"),
												"bg-zinc-200 text-black hover:shadow-blue-500 hover:ring-blue-300 hover:ring hover:ring-solid  hover:from-blue-500 hover:via-cyan-500 hover:to-cyan-600":
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
											className={clsx("text-md font-medium transition-all", {
												"text-blue-500": servicesOnHover !== index && index % 2 === 0 && themeSelection === "light",
												"text-cyan-600": servicesOnHover !== index && index % 2 !== 0 && themeSelection === "light",
												"!text-white font-bold":
													servicesOnHover === index || (servicesClicked.includes(index) && themeSelection === "light"),
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
												"!text-white":
													(servicesOnHover === index || servicesClicked.includes(index)) && themeSelection === "light",
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
									(servicesOnHover === services.length + 1 || servicesClicked.includes(services.length + 1)) &&
									themeSelection === "dark",
								"bg-gradient-to-r from-blue-500 to-cyan-400":
									(servicesOnHover === services.length + 1 || servicesClicked.includes(services.length + 1)) &&
									themeSelection === "light",
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
							className={clsx("text-md justify-start items-start flex w-full transition-all font-bold", {
								"text-pink-400":
									servicesOnHover !== services.length + 1 &&
									services.length + (1 % 2) === 0 &&
									themeSelection === "dark",
								"text-violet-400":
									servicesOnHover !== services.length + 1 &&
									services.length + (1 % 2) !== 0 &&
									themeSelection === "dark",
								"!text-white":
									(servicesOnHover === services.length + 1 || servicesClicked.includes(services.length + 1)) &&
									themeSelection === "dark",

								"text-blue-500":
									servicesOnHover !== services.length + 1 &&
									services.length + (1 % 2) === 0 &&
									themeSelection === "light",
								"text-blue-500 font-medium":
									servicesOnHover !== services.length + 1 &&
									services.length + (1 % 2) !== 0 &&
									themeSelection === "light",
								" !text-white font-bold":
									(servicesOnHover === services.length + 1 || servicesClicked.includes(services.length + 1)) &&
									themeSelection === "light",
							})}
						>
							{servicesOpen ? "Fechar" : "Ver Mais"}
						</p>
					</button>
				</div>
			</div>
		</div>
	);
};
