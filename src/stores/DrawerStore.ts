import { create } from "zustand";
import type { DrawerModelType } from "../models/DrawerModel";

type Out = DrawerModelType & {
	setMobileOpen: (open: boolean) => void;
	setClosing: (closing: boolean) => void;
	invertClosing: () => void;
};

const useDrawerStore = create<Out>((set) => ({
	isMobileOpen: false,
	isClosing: false,
	setMobileOpen: (isMobileOpen: boolean) => set(() => ({ isMobileOpen })),
	setClosing: (isClosing: boolean) => set(() => ({ isClosing })),
	invertClosing: () => set((state) => ({ isClosing: !state.isClosing })),
}));

const useDrawer = (): Out => ({
	isClosing: useDrawerStore((state) => state.isClosing),
	isMobileOpen: useDrawerStore((state) => state.isClosing),
	setMobileOpen: useDrawerStore((state) => state.setMobileOpen),
	setClosing: useDrawerStore((state) => state.setClosing),
	invertClosing: useDrawerStore((state) => state.invertClosing),
});

export default useDrawer;
