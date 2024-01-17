import { create } from "zustand";

interface IUseStore {
    enabled: boolean;
    toggle: () => void;
}

const useStore = create<IUseStore>((set) => ({
    enabled: false,
    toggle: () => set((state) => ({ enabled: !state.enabled })),
}));

export { useStore as useTheme };
