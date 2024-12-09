import { Divider, Toolbar } from "@mui/material";
import { routeInfo } from "../RouteNames";
import DrawerList from "./DrawerList";

const DrawerOrganizer = () => {
	return (
		<>
			<Toolbar />
			<Divider />
			{routeInfo().map((item, i) => (
				<DrawerList
					items={item}
					key={`dl-${
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						i
					}`}
				/>
			))}
		</>
	);
};

export default DrawerOrganizer;
