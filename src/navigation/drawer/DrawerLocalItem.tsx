import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import type { RouteInfoType } from "../RouteNames";

type Props = {
	item: RouteInfoType;
};
const DrawerLocalItem = ({
	item: { icon: LocalIcon, text, url },
}: Props): JSX.Element => {
	return (
		<ListItem key={text} disablePadding>
			<ListItemButton component={Link} to={url}>
				<ListItemIcon>
					<LocalIcon />
				</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
};

export default DrawerLocalItem;
