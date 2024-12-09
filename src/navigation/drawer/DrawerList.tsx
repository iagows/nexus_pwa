import { Divider, List } from "@mui/material";
import type { RouteInfoType } from "../RouteNames";
import DrawerLocalItem from "./DrawerLocalItem";

type Props = {
	items: RouteInfoType[];
};
const DrawerList = ({ items }: Props) => {
	return (
		<>
			<Divider />
			<List>
				{items.map((listItem) => (
					<DrawerLocalItem item={listItem} key={listItem.text} />
				))}
			</List>
		</>
	);
};

export default DrawerList;
