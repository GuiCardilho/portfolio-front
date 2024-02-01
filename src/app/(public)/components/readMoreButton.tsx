import { CarouselApi } from "@/components/shadcn/ui/carousel";
import { TransitionDefault } from "@/components/transition";
import { useTheme } from "@/store/theme";
import clsx from "clsx";
import { Dispatch, Fragment, SetStateAction } from "react";
import { HiOutlineArrowCircleDown, HiOutlineArrowCircleUp } from "react-icons/hi";

interface IProps {
	directionScroll: "up" | "down" | null;
	currentSlider: number;
	api: CarouselApi;
	setCurrentSlider: Dispatch<SetStateAction<number>>;
	setDirectionScroll: Dispatch<SetStateAction<"up" | "down" | null>>;
	countSlider: number;
}

export const ReadMoreButton = ({
	directionScroll,
	currentSlider,
	api,
	setDirectionScroll,
	setCurrentSlider,
	countSlider,
}: IProps) => {
	const { enabled: themeSelection } = useTheme();

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

	return (
		<Fragment>
			<TransitionDefault
				active={directionScroll === "up"}
				className="flex flex-col gap-2 justify-center items-center fixed bottom-8 flex-nowrap right-1/2 left-1/2 transform traslate-x-1/2 "
			>
				<button
					id="Slider"
					type="button"
					className={clsx(
						"animate-bounce items-center flex flex-col cursor-pointer  justify-center z-20 flex-nowrap fixed line-clamp-1 truncate font-bold",
						{
							"text-white": themeSelection === "dark",
							"text-black ": themeSelection === "light",
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
				className="flex flex-col gap-2 justify-center items-center fixed bottom-8 flex-nowrap right-1/2 left-1/2 transform traslate-x-1/2"
			>
				<button
					id="Slider"
					type="button"
					className={clsx(
						"animate-bounce items-center flex flex-col cursor-pointer  justify-center z-20 flex-nowrap fixed line-clamp-1 truncate font-bold",
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
		</Fragment>
	);
};
