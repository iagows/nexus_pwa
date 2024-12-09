import usePageStore from "../stores/slices/pages/usePageStore";

const Sobre = () => {
	const { setTitle } = usePageStore();

	setTitle("Sobre");

	return <></>;
};

export default Sobre;
