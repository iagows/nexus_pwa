import { Typography, type TypographyProps } from "@mui/material";
import { NO_MOUSE_CSS } from "./common";

const BodyText = (props: TypographyProps) => {
	return <Typography variant="body2" {...props} style={NO_MOUSE_CSS} />;
};

export default BodyText;
