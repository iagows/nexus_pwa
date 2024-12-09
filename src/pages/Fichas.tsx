import useFichaStore from "../stores/slices/ficha/useFichaStore";
import usePageStore from "../stores/slices/pages/usePageStore";

const Fichas = () => {
	const { setTitle } = usePageStore();
	setTitle("Fichas");

	const { list } = useFichaStore();

	return (
		<>
			{list.map((char) => (
				<p key={char.nome}>{char.nome}</p>
			))}
		</>
	);
};

export default Fichas;
