const lista = ["fulano", "cicrano", "beltrano"];
const Fichas = () => {
	return (
		<>
			{lista.map((char) => (
				<p key={char}>{char}</p>
			))}
		</>
	);
};

export default Fichas;
