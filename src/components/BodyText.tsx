import { Typography, type TypographyProps } from "@mui/material";

const CSS: React.CSSProperties = {
	userSelect: "none",
};

const BodyText = (props: TypographyProps) => {
	return <Typography variant="body2" {...props} style={CSS} />;
};

export default BodyText;
