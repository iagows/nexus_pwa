import usePageStore from "../stores/slices/pages/usePageStore";

const QuebrarObjeto = () => {
	const { setTitle } = usePageStore();

	setTitle("Quebrar objeto");

	return <></>;
};

export default QuebrarObjeto;
