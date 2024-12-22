import {
	ClickAwayListener,
	IconButton,
	styled,
	Tooltip,
	tooltipClasses,
	Typography,
	type TooltipProps,
} from "@mui/material";
import BodyText from "./BodyText";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

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
	const [open, setOpen] = useState(false);

	const handleTooltipClose = () => {
		setOpen(false);
	};

	const handleTooltipOpen = () => {
		setOpen(true);
	};

	return (
		<ClickAwayListener onClickAway={handleTooltipClose}>
			<div role="presentation">
				<HtmlTooltip
					open={open}
					title={
						<>
							<Typography color="inherit">{title}</Typography>
							<BodyText>{text}</BodyText>
						</>
					}
				>
					<IconButton size="small" onClick={handleTooltipOpen}>
						<InfoIcon />
					</IconButton>
				</HtmlTooltip>
			</div>
		</ClickAwayListener>
	);
};

export default AppTooltip;
