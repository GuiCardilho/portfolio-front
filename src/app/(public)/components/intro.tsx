import { Steps } from "intro.js-react";
import { useEffect, useState } from "react";

export const HomePageIntro = () => {
	const [intro, setIntro] = useState(false);

	const steps = [
		{
			element: "#DarkMode",
			intro: "Venha conhecer o lado hacker da força.",
			position: "bottom",
		},
		{
			element: "#Slider",
			intro: "Você pode navegar entre as seções do meu portfólio clicando e arrastando o slider abaixo.",
			position: "top",
		},
	];

	useEffect(() => {
		const intro = localStorage.getItem("intro");
		if (!intro) {
			setIntro(true);
			localStorage.setItem("intro", "true");
		}
	}, []);

	return (
		<Steps
			enabled={intro}
			steps={steps}
			initialStep={0}
			onExit={() => {
				setIntro(false);
			}}
			options={{
				nextLabel: "Próximo",
				prevLabel: "Anterior",
				doneLabel: "Finalizar",
				showProgress: false,
				scrollToElement: true,
				scrollPadding: 100,
				hidePrev: false,
				hideNext: false,
				hideDone: false,
				showBullets: true,
				exitOnOverlayClick: true,
				exitOnEsc: true,
				disableInteraction: true,
				showStepNumbers: false,
				keyboardNavigation: true,
				overlayOpacity: 0.5,
				tooltipClass: "",
				highlightClass: "",
				positionPrecedence: ["bottom", "top", "right", "left"],
				disableFocus: false,
				scrollTo: "tooltip",
				scrollParent: false,
				showButtons: true,
			}}
		/>
	);
};
