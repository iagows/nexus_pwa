import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	IconButton,
	type SxProps,
	type Theme,
	Toolbar,
	Typography,
} from "@mui/material";
import type { PropsWithChildren } from "react";
import { Constants } from "../constants";
import useDrawerStore from "../stores/slices/drawer/useDrawerStore";
import ToolbarTitle from "../components/ToolbarTitle";

const BAR_CSS: SxProps<Theme> = {
	width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
	ml: { sm: `${Constants.DRAWER_WIDTH}px` },
};
const ICON_CSS: SxProps<Theme> = { mr: 2, display: { sm: "none" } };

type Props = {
	title: string;
};

const AppToolBar = ({ title, children }: PropsWithChildren<Props>) => {
	const { isClosing, setMobileOpen, isMobileOpen } = useDrawerStore();

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!isMobileOpen);
		}
	};

	return (
		<AppBar position="fixed" sx={BAR_CSS}>
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerToggle}
					sx={ICON_CSS}
				>
					<MenuIcon />
				</IconButton>
				<ToolbarTitle variant="h6" noWrap component="div">
					{title}
				</ToolbarTitle>
				{children}
			</Toolbar>
		</AppBar>
	);
};

export default AppToolBar;
