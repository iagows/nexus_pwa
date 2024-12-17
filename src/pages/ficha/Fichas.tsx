import AddIcon from "@mui/icons-material/Add";
import { IconButton, Stack } from "@mui/material";
import FichaFactory from "../../factory/FichaFactory";
import AppToolBar from "../../navigation/AppToolbar";
import useFichaStore from "../../stores/slices/ficha/useFichaStore";
import FichaCard from "./FichaCard";
import { useNavigate } from "react-router-dom";

const Fichas = () => {
	const { create, list } = useFichaStore();
	const navigate = useNavigate();

	const createFicha = () => {
		const ficha = FichaFactory();
		create(ficha);
		navigate(`/ficha/${ficha.id}?edit=true`);
	};

	return (
		<>
			<AppToolBar title="Fichas">
				<IconButton aria-label="delete" onClick={createFicha}>
					<AddIcon />
				</IconButton>
			</AppToolBar>

			<Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
				{list.map((char) => (
					<FichaCard key={char.id} ficha={char} />
				))}
			</Stack>
		</>
	);
};

export default Fichas;
