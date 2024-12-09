import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
	Box,
	CssBaseline,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { Constants } from "../constants";
import AppToolBar from "./AppToolbar";
import useDrawerStore from "../stores/slices/drawer/useDrawerStore";
import { routeInfo } from "./RouteNames";

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

const DRAWER_CSS_MOBILE = {
	...DRAWER_CSS_MOBILE_DISPLAY,
	...DRAWER_CSS_PAPER,
} as const;

const DRAWER_CSS_OTHER = {
	...DRAWER_CSS_OTHER_DISPLAY,
	...DRAWER_CSS_PAPER,
} as const;

const KEEP_MOUNTED = {
	keepMounted: true,
} as const;

const BOX_CSS = {
	width: { sm: Constants.DRAWER_WIDTH },
	flexShrink: { sm: 0 },
} as const;

const AppDrawer = () => {
	const { isMobileOpen, setMobileOpen, setClosing } = useDrawerStore();

	const handleDrawerClose = () => {
		setClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setClosing(false);
	};

	const drawer = (
		<>
			<Toolbar />
			<Divider />
			{routeInfo().map((item, index) => {
				return (
					<>
						<Divider
							key={`div_${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								index
							}`}
						/>
						<List
							key={`list_${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								index
							}`}
						>
							{item.map(({ icon: LocalIcon, ...listItem }) => (
								<ListItem key={listItem.menu} disablePadding>
									<ListItemButton>
										<ListItemIcon>
											<LocalIcon />
										</ListItemIcon>
										<ListItemText primary={listItem.menu} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</>
				);
			})}
		</>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppToolBar />
			<Box component="nav" sx={BOX_CSS} aria-label="mailbox folders">
				<Drawer
					variant="temporary"
					open={isMobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={KEEP_MOUNTED}
					sx={DRAWER_CSS_MOBILE}
				>
					{drawer}
				</Drawer>
				<Drawer variant="permanent" sx={DRAWER_CSS_OTHER} open>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
				}}
			>
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	);
};

export default AppDrawer;
