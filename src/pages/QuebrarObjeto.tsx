import usePageStore from "../stores/slices/pages/usePageStore";

const QuebrarObjetos = () => {
	const { setTitle } = usePageStore();

	setTitle("Quebrar objeto");

	return <></>;
};

export default QuebrarObjetos;
