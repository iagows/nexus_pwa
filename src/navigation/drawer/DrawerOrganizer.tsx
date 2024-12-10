import { Divider, Toolbar } from "@mui/material";
import DrawerList from "./DrawerList";
import useRouteData from "../../hooks/useRouteData";

const DrawerOrganizer = () => {
	const { routeInfo } = useRouteData();
	return (
		<>
			<Toolbar />
			<Divider />
			{routeInfo.map((item, i) => (
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
