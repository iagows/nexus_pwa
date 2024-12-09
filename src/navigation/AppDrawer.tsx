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

const drawer = (
	<div>
		<Toolbar />
		<Divider />
		<List>
			{["Ficha atual", "Fichas", "Editar ficha"].map((text, index) => (
				<ListItem key={text} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
		<Divider />
		<List>
			{["Criar habilidade", "Quebrar objeto"].map((text, index) => (
				<ListItem key={text} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
		<Divider />
		<List>
			{["Configurações", "Sobre"].map((text, index) => (
				<ListItem key={text} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	</div>
);

const AppDrawer = () => {
	const { isMobileOpen, setClosing, setMobileOpen } = useDrawerStore();

	const handleDrawerClose = () => {
		setClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setClosing(false);
	};

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
