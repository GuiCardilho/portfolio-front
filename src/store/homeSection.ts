import { create } from "zustand";

interface IUseStore {
	section: string;
	setSection: (section: string) => void;
}

const useStore = create<IUseStore>((set) => ({
	section: "",
	setSection: (section: string) => set(() => ({ section })),
}));

export { useStore as useHomeSection };
