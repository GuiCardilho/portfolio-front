"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselProps } from "@/components/shadcn/ui/carousel";
import { useHomeSection } from "@/store/homeSection";
import { useTheme } from "@/store/theme";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { HomePageIntro } from "./components/intro";
import { ReadMoreButton } from "./components/readMoreButton";
import { HomeSectionAbout } from "./sections/about";
import { HomeSectionInitial } from "./sections/home";
import { HomeSectionServices } from "./sections/services";

export default function Page() {
	const { enabled: themeSelection } = useTheme();
	const { section } = useHomeSection();
	const { scrollY } = useScroll();
	const [api, setApi] = useState<CarouselApi>();
	const [currentSlider, setCurrentSlider] = useState(0);
	const [countSlider, setCountSlider] = useState(0);
	const [directionScroll, setDirectionScroll] = useState<"up" | "down" | null>("down");
	const [verifyScroll, setVerifyScroll] = useState(true);
	const [timeOut, setTimeOut] = useState<NodeJS.Timeout | null>(null);

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

	useEffect(() => {
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

	const carouselOps: Partial<CarouselProps["opts"]> = {
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
	};

	const carouselItems = [
		{
			id: "inicio",
			render: <HomeSectionInitial api={api} />,
		},
		{
			id: "sobre",
			render: <HomeSectionAbout />,
		},
		{
			id: "servicos",
			render: <HomeSectionServices />,
		},
	];

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return (
			<div>
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
			</div>
		);
	}

	return (
		<div className="flex w-full h-full" suppressHydrationWarning>
			<div
				className={clsx("fixed flex w-full h-full", {
					"bg-backgroundCustom-primary": themeSelection === "dark",
					"bg-foregroundCustom-primary": themeSelection === "light",
				})}
			>
				<Carousel orientation="vertical" opts={carouselOps} setApi={setApi}>
					<CarouselContent className="-mt-1 w-full h-screen ">
						{carouselItems.map((item) => (
							<CarouselItem
								key={item.id}
								className={clsx({
									"bg-backgroundCustom-primary text-white": themeSelection === "dark",
									"bg-foregroundCustom-primary text-black": themeSelection === "light",
								})}
							>
								{item.render}
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			<div className="h-[1000px] 	" />

			<ReadMoreButton
				api={api}
				countSlider={countSlider}
				currentSlider={currentSlider}
				directionScroll={directionScroll}
				setCurrentSlider={setCurrentSlider}
				setDirectionScroll={setDirectionScroll}
			/>
			<HomePageIntro />
		</div>
	);
}
