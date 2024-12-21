import AddIcon from "@mui/icons-material/Add";
import { IconButton, Stack } from "@mui/material";
import FichaFactory from "../../factory/FichaFactory";
import useAppNavigate from "../../hooks/useAppNavigate";
import AppToolBar from "../../navigation/AppToolbar";
import useEditFicha from "../../stores/slices/edit/useEditFicha";
import useFichaStore from "../../stores/slices/ficha/useFichaStore";
import FichaCard from "./FichaCard";

const Fichas = () => {
	const { list } = useFichaStore();
	const { setCurrent } = useEditFicha();
	const { goToEditFicha } = useAppNavigate();

	const createFicha = () => {
		const ficha = FichaFactory();
		setCurrent(ficha);
		goToEditFicha(ficha);
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
