import { useSearchParams } from "react-router-dom";

const Ficha = () => {
	const [searchParams] = useSearchParams();

	console.log(searchParams.get("edit"));

	return <>oi</>;
};

export default Ficha;
