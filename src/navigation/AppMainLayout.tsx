import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Constants } from "../constants";
import AppToolBar from "./AppToolbar";
import DrawerSelection from "./drawer/DrawerSelection";

const BOX_SX_CSS = {
	p: 3,
	flexGrow: 1,
	width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
} as const;

const BOX_FLEX = { display: "flex" } as const;

const AppMainLayout = () => {
	return (
		<Box sx={BOX_FLEX}>
			<CssBaseline />
			<AppToolBar />
			<DrawerSelection />
			<Box component="main" sx={BOX_SX_CSS}>
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	);
};

export default AppMainLayout;
