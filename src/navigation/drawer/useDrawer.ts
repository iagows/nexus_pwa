import useDrawerStore from "../../stores/slices/drawer/useDrawerStore";

type Out = {
	close: () => void;
	transitionEnd: () => void;
	isMobileOpen: boolean;
};
const useDrawer = (): Out => {
	const { isMobileOpen, setMobileOpen, setClosing } = useDrawerStore();

	const handleDrawerClose = () => {
		setClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setClosing(false);
	};

	return {
		isMobileOpen,
		close: handleDrawerClose,
		transitionEnd: handleDrawerTransitionEnd,
	};
};

export default useDrawer;
