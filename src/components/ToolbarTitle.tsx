import { Typography, type TypographyProps } from "@mui/material";
import { NO_MOUSE_CSS } from "./common";

const ToolbarTitle = (props: TypographyProps) => {
	return (
		<Typography
			noWrap
			variant="h6"
			flexGrow={1}
			component="div"
			style={NO_MOUSE_CSS}
			{...props}
		/>
	);
};

export default ToolbarTitle;
