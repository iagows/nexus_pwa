import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import type { RouteInfoType } from "../RouteNames";

type Props = {
	item: RouteInfoType;
};
const DrawerLocalItem = ({
	item: { icon: LocalIcon, menu },
}: Props): JSX.Element => {
	return (
		<ListItem key={menu} disablePadding>
			<ListItemButton>
				<ListItemIcon>
					<LocalIcon />
				</ListItemIcon>
				<ListItemText primary={menu} />
			</ListItemButton>
		</ListItem>
	);
};

export default DrawerLocalItem;
