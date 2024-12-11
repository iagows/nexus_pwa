import BodyText from "../components/BodyText";
import AppToolBar from "../navigation/AppToolbar";
import useFichaStore from "../stores/slices/ficha/useFichaStore";

const Fichas = () => {
	const { list } = useFichaStore();

	return (
		<>
			<AppToolBar title="Fichas" />
			<BodyText>Fichas</BodyText>
			{list.map((char) => (
				<p key={char.nome}>{char.nome}</p>
			))}
		</>
	);
};

export default Fichas;
