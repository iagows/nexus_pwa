import {
	IconButton,
	styled,
	Tooltip,
	tooltipClasses,
	Typography,
	type TooltipProps,
} from "@mui/material";
import BodyText from "./BodyText";
import InfoIcon from "@mui/icons-material/Info";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "#f5f5f9",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: "1px solid #dadde9",
	},
}));

type Props = {
	title: string;
	text: string;
};
const AppTooltip = ({ title, text }: Props) => {
	return (
		<HtmlTooltip
			title={
				<>
					<Typography color="inherit">{title}</Typography>
					<BodyText>{text}</BodyText>
				</>
			}
		>
			<IconButton size="small">
				<InfoIcon />
			</IconButton>
		</HtmlTooltip>
	);
};

export default AppTooltip;
