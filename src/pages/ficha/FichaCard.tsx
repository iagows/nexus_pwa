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
	Typography,
} from "@mui/material";
import type { Ficha } from "../../models/FichaDTO";

type Props = {
	ficha: Ficha;
};
const FichaCard = ({ ficha }: Props) => {
	return (
		<Card sx={{ width: 345 }}>
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
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						{ficha.profile.description}
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
