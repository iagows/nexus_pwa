import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Constants } from "../constants";
import useDrawerStore from "../stores/slices/drawer/useDrawerStore";
import usePageStore from "../stores/slices/pages/usePageStore";

const BAR_CSS = {
	width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
	ml: { sm: `${Constants.DRAWER_WIDTH}px` },
};
const ICON_CSS = { mr: 2, display: { sm: "none" } };

const AppToolBar = () => {
	const { title } = usePageStore();
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
				<Typography variant="h6" noWrap component="div">
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default AppToolBar;
