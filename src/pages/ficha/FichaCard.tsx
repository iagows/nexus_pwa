import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	type SxProps,
	type Theme,
	Typography,
} from "@mui/material";
import type { Ficha } from "../../models/FichaDTO";

const CARD_CSS: SxProps<Theme> = {
	width: 345,
};

const CARD_DESCRIPTION_CSS: SxProps<Theme> = {
	color: "text.secondary",
};

type Props = {
	ficha: Ficha;
};

const FichaCard = ({ ficha }: Props) => {
	return (
		<Card sx={CARD_CSS}>
			<CardActionArea>
				{ficha.imagem && (
					<CardMedia
						height="140"
						component="img"
						alt={ficha.nome}
						image={ficha.imagem}
					/>
				)}
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{ficha.nome}
					</Typography>
					<Typography variant="body2" sx={CARD_DESCRIPTION_CSS}>
						{ficha.profile.details}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Box sx={{ flex: 1 }}>
					<IconButton aria-label="view" disabled>
						<VisibilityOutlinedIcon />
					</IconButton>
					<IconButton aria-label="edit" disabled>
						<EditOutlinedIcon />
					</IconButton>
				</Box>
				<IconButton aria-label="edit" disabled>
					<DeleteOutlineOutlinedIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default FichaCard;
