import usePageStore from "../stores/slices/pages/usePageStore";

const Habilidades = () => {
	const { setTitle } = usePageStore();

	setTitle("Habilidades");

	return <></>;
};

export default Habilidades;
