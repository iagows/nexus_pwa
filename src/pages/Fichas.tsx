import AppToolBar from "../navigation/AppToolbar";
import useFichaStore from "../stores/slices/ficha/useFichaStore";

const Fichas = () => {
	const { list } = useFichaStore();

	return (
		<>
			<AppToolBar />
			<p>Fichas</p>
			{list.map((char) => (
				<p key={char.nome}>{char.nome}</p>
			))}
		</>
	);
};

export default Fichas;
