import useFichaStore from "../stores/slices/ficha/useFichaStore";

const Fichas = () => {
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
