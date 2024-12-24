import {
	Box,
	Drawer,
	type ModalProps,
	type SxProps,
	type Theme,
} from "@mui/material";
import { Constants } from "../../constants";
import DrawerOrganizer from "./DrawerOrganizer";
import useDrawer from "./useDrawer";

const DRAWER_CSS_MOBILE_DISPLAY: SxProps<Theme> = {
	display: { xs: "block", sm: "none" },
};

const DRAWER_CSS_OTHER_DISPLAY: SxProps<Theme> = {
	display: { xs: "none", sm: "block" },
};

const DRAWER_CSS_PAPER: SxProps<Theme> = {
	"& .MuiDrawer-paper": {
		boxSizing: "border-box",
		width: Constants.DRAWER_WIDTH,
	},
};

const BOX_CSS: SxProps<Theme> = {
	width: { sm: Constants.DRAWER_WIDTH },
	flexShrink: { sm: 0 },
};

const DRAWER_CSS_OTHER: SxProps<Theme> = {
	...DRAWER_CSS_OTHER_DISPLAY,
	...DRAWER_CSS_PAPER,
};

const DRAWER_CSS_MOBILE: SxProps<Theme> = {
	...DRAWER_CSS_MOBILE_DISPLAY,
	...DRAWER_CSS_PAPER,
};

const KEEP_MOUNTED: Partial<ModalProps> = {
	keepMounted: true,
};

const DrawerSelection = () => {
	const { close, isMobileOpen, transitionEnd } = useDrawer();

	return (
		<Box component="nav" sx={BOX_CSS} aria-label="mailbox folders">
			<Drawer
				variant="temporary"
				open={isMobileOpen}
				onTransitionEnd={transitionEnd}
				onClose={close}
				ModalProps={KEEP_MOUNTED}
				sx={DRAWER_CSS_MOBILE}
			>
				<DrawerOrganizer />
			</Drawer>
			<Drawer variant="permanent" sx={DRAWER_CSS_OTHER} open>
				<DrawerOrganizer />
			</Drawer>
		</Box>
	);
};

export default DrawerSelection;
