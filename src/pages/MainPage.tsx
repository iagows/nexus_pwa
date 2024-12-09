import { Box } from "@mui/material";
import AppDrawer from "../navigation/drawer/AppDrawer";

const MainPage = () => {
	return (
		<Box display={"flex"} flexDirection={"column"}>
			<Box display={"flex"}>
				<AppDrawer />
			</Box>
		</Box>
	);
};

export default MainPage;
