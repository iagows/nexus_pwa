import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { Ficha } from "../../../models/FichaDTO";
import { setEdit } from "./";

type Out = {
	current: Ficha;
	setCurrent: (current: Ficha) => void;
};
const useEditFicha = (): Out => {
	const dispatcher = useAppDispatch();
	const { current } = useAppSelector((state) => state.edition);

	const setCurrent = (ficha: Ficha): void => {
		dispatcher(setEdit(ficha));
	};

	return {
		current,
		setCurrent,
	};
};

export default useEditFicha;
