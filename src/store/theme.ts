import { create } from "zustand";

interface IUseStore {
	enabled: "dark" | "light";
	toggle: () => void;
}

const useStore = create<IUseStore>((set) => ({
	enabled: "light",
	toggle: () => set((state) => ({ enabled: state.enabled === "dark" ? "light" : "dark" })),
}));

export { useStore as useTheme };
