import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import AppToolBar from "../navigation/AppToolbar";
import useFichaStore from "../stores/slices/ficha/useFichaStore";

const Fichas = () => {
	const { list } = useFichaStore();

	return (
		<>
			<AppToolBar title="Fichas">
				<IconButton aria-label="delete" disabled>
					<AddIcon />
				</IconButton>
			</AppToolBar>

			{list.map((char) => (
				<p key={char.nome}>{char.nome}</p>
			))}
		</>
	);
};

export default Fichas;
