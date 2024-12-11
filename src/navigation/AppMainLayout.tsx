import {
	Box,
	CssBaseline,
	type SxProps,
	type Theme,
	Toolbar,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { Constants } from "../constants";
import DrawerSelection from "./drawer/DrawerSelection";

const BOX_SX_CSS: SxProps<Theme> = {
	p: 3,
	flexGrow: 1,
	width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
};

const BOX_FLEX: SxProps<Theme> = { display: "flex" };

const AppMainLayout = () => {
	return (
		<Box sx={BOX_FLEX}>
			<CssBaseline />
			<DrawerSelection />
			<Box component="main" sx={BOX_SX_CSS}>
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	);
};

export default AppMainLayout;
