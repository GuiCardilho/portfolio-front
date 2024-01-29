import { Transition } from "@headlessui/react";

export const TransitionDefault = ({
	active,
	children,
	className,
}: {
	active: boolean;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<Transition
			show={active}
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			className={` ${className}`}
		>
			{children}
		</Transition>
	);
};
