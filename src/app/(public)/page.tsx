"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { HiOutlineArrowCircleRight, HiOutlineArrowCircleDown } from "react-icons/hi";
import clsx from "clsx";

export default function Page() {
	const [servicesOnHover, setServicesOnHover] = useState<number | null>(null);
	const [servicesClicked, setServicesClicked] = useState<number[]>([]);
	const [servicesOpen, setServicesOpen] = useState(false);
	const refServices = useRef<HTMLDivElement>(null);

	const skills = [
		{
			label: "NextJS",
			className: "bg-gradient-to-r from-violet-600 to-pink-400 font-medium",
		},
		{
			label: "ReactJS",
		},
		{
			label: "NodeJS",
			className: "bg-gradient-to-r from-violet-600 to-pink-400 font-medium",
		},

		{
			label: "Javascript",
		},
		{
			label: "Typescript",
			className: "bg-gradient-to-r from-violet-600 to-pink-400 font-medium",
		},
		{
			label: "HTML",
		},
		{
			label: "TailwindCSS",
			className: "bg-gradient-to-r from-violet-600 to-pink-400 font-medium",
		},
		{
			label: "CSS",
		},
		{
			label: "ExpressJS",
			className: "bg-gradient-to-r from-violet-600 to-pink-400 font-medium",
		},
		{
			label: "SQL",
		},
		{
			label: "NoSQL",
			className: "bg-gradient-to-r from-violet-600 to-pink-400 font-medium",
		},
		{
			label: "MySQL",
		},
		{
			label: "AWS",
			className: "bg-gradient-to-r from-violet-600 to-pink-400 font-medium",
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
			className: "bg-gradient-to-r from-violet-600 to-pink-400 font-medium",
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

	return (
		<div className="flex flex-col w-full h-full">
			<div className="bg-background-primary cursor-default min-h-screen text-white justify-around items-center flex flex-col lg:flex-row w-full shadow gap-8 lg:gap-4 py-20 px-4">
				<div className="flex flex-col gap-8 max-w-lg transition-all">
					<p className="text-lg">Olá, meu nome é Guilherme</p>

					<h1 className="text-3xl sm:text-5xl font-bold">
						Sou um desenvolvedor <br />
						<span className="font-bold text-transparent bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text">
							Full Stack.
						</span>
					</h1>

					<p className="text-zinc-400 text-sm">Eu sou um desenvolvedor Full Stack Web, com foco em ReactJS e NodeJS.</p>

					<button className="bg-violet-500 cursor-pointer px-5 py-3 rounded flex gap-4 justify-center items-center w-fit hover:shadow-violet-300 shadow hover:bg-gradient-to-r hover:from-violet-400 hover:via-pink-400 hover:to-pink-600 transition-all duration-700 ease-in-out transform hover:scale-105">
						Confira meus projetos
						<HiOutlineArrowCircleRight size={20} />
					</button>
				</div>

				<div className="hidden lg:flex rounded-full border-4 border-solid border-violet-600 bg-zinc-800 relative overflow-hidden bg shadow-lg shadow-violet-300">
					<Image
						src="/avatar.png"
						alt="Hero"
						className="w-[250px]  h-[250px] sm:w-[500px] sm:h-[500px]"
						height={800}
						width={800}
					/>
				</div>

				<div
					className="lg:hidden animate-bounce justify-center items-center flex flex-col cursor-pointer"
					onClick={() => {
						refServices.current?.scrollIntoView({
							behavior: "smooth",
						});
					}}
				>
					Saiba Mais
					<HiOutlineArrowCircleDown size={24} />
				</div>
			</div>

			<div
				className="bg-background-secondary cursor-default  min-h-screen text-white justify-around items-center flex flex-col lg:flex-row w-full shadow gap-8 lg:gap-4 py-20 px-4"
				ref={refServices}
			>
				<div className=" rounded-full border-4 border-solid border-violet-600 bg-zinc-800 relative overflow-hidden bg shadow-lg shadow-violet-300 ">
					<Image
						src="/avatar.png"
						alt="Hero"
						className="w-[250px]  h-[250px] sm:w-[500px] sm:h-[500px]"
						height={800}
						width={800}
					/>
				</div>

				<div className="flex flex-col gap-8 max-w-lg ">
					<p className="text-lg">Sobre Mim</p>

					<h1 className="text-3xl sm:text-5xl  font-bold">
						Guilherme{" "}
						<span className="font-bold text-transparent bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text">
							Cardilho
						</span>
					</h1>

					<p className="text-zinc-400 text-sm leading-7">
						Olá, meu nome é Guilherme Cardilho, sou desenvolvedor web Full Stack, com foco em ReactJS e NodeJS a 2 anos
						e sou apaixonado por tecnologia e inovação, por isso sempre estou buscando novos conhecimentos e desafios.
					</p>

					<div className="flex gap-4 flex-col">
						<p className="font-medium"> Minhas Principais Habilidades: </p>

						<div className="flex flex-1 flex-wrap gap-2 ">
							{skills.map((skill, index) => (
								<div key={index} className={`flex px-2 py-1 bg-zinc-600 rounded-sm ${skill.className || ""}`}>
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

			<div className="bg-background-primary min-h-screen text-white justify-around items-center flex w-full shadow py-20">
				<div className="flex flex-col gap-10 px-20">
					<div className="flex flex-col gap-2">
						<p>Serviços que já prestei para empresas e clientes</p>

						<h1 className="text-3xl sm:text-5xl l font-bold">
							Meus{" "}
							<span className="font-bold text-transparent bg-gradient-to-r from-violet-600 to-pink-400 bg-clip-text">
								Serviços.
							</span>
						</h1>
					</div>

					<div className="flex gap-6 flex-wrap ">
						{services.map((service, index) => (
							<div
								className={clsx(
									" hidden md:flex flex-col flex-1 duration-500 cursor-pointer bg-zinc-800 p-4 rounded-md shadow gap-4  min-w-[300px] hover:shadow-violet-700 transition-all  hover:scale-105 hover:bg-gradient-to-t hover:from-violet-600 hover:via-violet-400 hover:to-pink-400 !text-white ",
									{
										"bg-gradient-to-r from-violet-600 to-pink-400":
											servicesOnHover === index || servicesClicked.includes(index),
									},
								)}
								key={index}
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
										"text-pink-400": servicesOnHover !== index && index % 2 === 0,
										"text-violet-400": servicesOnHover !== index && index % 2 !== 0,
										"!text-white": servicesOnHover === index || servicesClicked.includes(index),
									})}
								>
									{service.subtitle}
								</p>

								<h2 className="text-lg uppercase font-bold">{service.title}</h2>

								<p
									className={clsx("text-sm text-zinc-300 leading-6 justify-center items-center flex ", {
										"!text-white": servicesOnHover === index || servicesClicked.includes(index),
									})}
								>
									{service.description}
								</p>
							</div>
						))}

						{services.map((service, index) => {
							if (index > 4 && !servicesOpen) return;
							return (
								<div
									className={clsx(
										" flex md:hidden flex-col flex-1 duration-500 cursor-pointer bg-zinc-800 p-4 rounded-md shadow gap-4  min-w-[300px] hover:shadow-violet-700 transition-all  hover:scale-105 hover:bg-gradient-to-t hover:from-violet-600 hover:via-violet-400 hover:to-pink-400 !text-white ",
										{
											"bg-gradient-to-r from-violet-600 to-pink-400":
												servicesOnHover === index || servicesClicked.includes(index),
										},
									)}
									key={index}
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
											"text-pink-400": servicesOnHover !== index && index % 2 === 0,
											"text-violet-400": servicesOnHover !== index && index % 2 !== 0,
											"!text-white": servicesOnHover === index || servicesClicked.includes(index),
										})}
									>
										{service.subtitle}
									</p>

									<h2 className="text-lg uppercase font-bold">{service.title}</h2>

									<p
										className={clsx("text-sm text-zinc-300 leading-6 justify-center items-center flex ", {
											"!text-white": servicesOnHover === index || servicesClicked.includes(index),
										})}
									>
										{service.description}
									</p>
								</div>
							);
						})}

						<div
							className={clsx(
								" flex md:hidden flex-col flex-1 duration-500 cursor-pointer bg-zinc-800 p-4 rounded-md shadow gap-4  min-w-[300px] hover:shadow-violet-700 transition-all  hover:scale-105 hover:bg-gradient-to-t hover:from-violet-600 hover:via-violet-400 hover:to-pink-400 !text-white ",
								{
									"bg-gradient-to-r from-violet-600 to-pink-400":
										servicesOnHover === services.length + 1 || servicesClicked.includes(services.length + 1),
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
								className={clsx("text-md justify-center items-center flex w-full", {
									"text-pink-400": servicesOnHover !== services.length + 1 && services.length + (1 % 2) === 0,
									"text-violet-400": servicesOnHover !== services.length + 1 && services.length + (1 % 2) !== 0,
									"!text-white":
										servicesOnHover === services.length + 1 || servicesClicked.includes(services.length + 1),
								})}
							>
								{servicesOpen ? "Fechar" : "Ver Mais"}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
