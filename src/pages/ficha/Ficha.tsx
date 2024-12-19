import useAppNavigate, { ParamName } from "../../hooks/useAppNavigate";
import FichaEdition from "./FichaEdition";
import FichaView from "./FichaView";

const Ficha = () => {
	const { getParam } = useAppNavigate();
	const isEdit = getParam<boolean>(ParamName.EDIT);

	return <>{isEdit ? <FichaEdition /> : <FichaView />}</>;
};

export default Ficha;
