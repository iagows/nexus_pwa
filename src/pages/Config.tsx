import usePageStore from "../stores/slices/pages/usePageStore";

const Config = () => {
	const { setTitle } = usePageStore();

	setTitle("Configurações");

	return <></>;
};

export default Config;
