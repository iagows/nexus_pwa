import { Box } from "@mui/material";
import AppMainLayout from "../navigation/AppMainLayout";

const MainPage = () => {
	return (
		<Box display={"flex"} flexDirection={"column"}>
			<Box display={"flex"}>
				<AppMainLayout />
			</Box>
		</Box>
	);
};

export default MainPage;
