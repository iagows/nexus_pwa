import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Constants } from "../constants";
import useDrawerStore from "../stores/slices/drawer/useDrawerStore";

const BAR_CSS = {
	width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
	ml: { sm: `${Constants.DRAWER_WIDTH}px` },
};
const ICON_CSS = { mr: 2, display: { sm: "none" } };

const AppToolBar = () => {
	const { isClosing, invertClosing } = useDrawerStore();

	const handleDrawerToggle = () => {
		if (!isClosing) {
			invertClosing();
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
				<Typography variant="h6" noWrap component="div">
					Lista de fichas
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default AppToolBar;
