import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { DrawerModelType } from "../../../models/DrawerModel";
import {
	setClosing as storeSetClosing,
	setMobileOpen as storeSetMobileOpen,
	invertClosing as storeInvert,
} from ".";

type Out = DrawerModelType & {
	setMobileOpen: (open: boolean) => void;
	setClosing: (closing: boolean) => void;
	invertClosing: () => void;
};

const useDrawerStore = (): Out => {
	const dispatch = useAppDispatch();
	const { isClosing, isMobileOpen } = useAppSelector((state) => state.drawer);

	const invertClosing = () => {
		console.log("invert");
		dispatch(storeInvert());
	};

	const setClosing = (closing: boolean) => {
		console.log("close", closing);
		dispatch(storeSetClosing(closing));
	};

	const setMobileOpen = (open: boolean) => {
		console.log("mobile", open);
		dispatch(storeSetMobileOpen(open));
	};

	return {
		isClosing,
		setClosing,
		isMobileOpen,
		invertClosing,
		setMobileOpen,
	};
};

export default useDrawerStore;
