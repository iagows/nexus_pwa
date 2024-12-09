import { Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Constants } from "../../constants";
import useDrawerStore from "../../stores/slices/drawer/useDrawerStore";
import AppToolBar from "../AppToolbar";
import DrawerOrganizer from "./DrawerOrganizer";

const DRAWER_CSS_MOBILE_DISPLAY = {
	display: { xs: "block", sm: "none" },
} as const;

const DRAWER_CSS_OTHER_DISPLAY = {
	display: { xs: "none", sm: "block" },
} as const;

const DRAWER_CSS_PAPER = {
	"& .MuiDrawer-paper": {
		boxSizing: "border-box",
		width: Constants.DRAWER_WIDTH,
	},
} as const;

const BOX_CSS = {
	width: { sm: Constants.DRAWER_WIDTH },
	flexShrink: { sm: 0 },
} as const;

const DRAWER_CSS_OTHER = {
	...DRAWER_CSS_OTHER_DISPLAY,
	...DRAWER_CSS_PAPER,
} as const;

const DRAWER_CSS_MOBILE = {
	...DRAWER_CSS_MOBILE_DISPLAY,
	...DRAWER_CSS_PAPER,
} as const;

const KEEP_MOUNTED = {
	keepMounted: true,
} as const;

const DrawerSelection = () => {
	const { isMobileOpen, setMobileOpen, setClosing } = useDrawerStore();

	const handleDrawerClose = () => {
		setClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setClosing(false);
	};
	return (
		<Box component="nav" sx={BOX_CSS} aria-label="mailbox folders">
			<Drawer
				variant="temporary"
				open={isMobileOpen}
				onTransitionEnd={handleDrawerTransitionEnd}
				onClose={handleDrawerClose}
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
