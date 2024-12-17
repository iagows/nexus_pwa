import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { Ficha } from "../../../models/FichaDTO";
import type { SingleOrArray } from "../../../util/commonTypes";
import { toArray } from "../../../util/functions";
import type { CrudType } from "../CrudTypes";
import {
	create as createFicha,
	remove as removeFicha,
	invertFavorite,
	update as updateFicha,
	selectAll,
	// selectById,
	selectTotal,
} from "./index";
import RouteNames from "../../../navigation/RouteNames";

type Out = CrudType<Ficha> & {
	changeFav: (id: string) => void;
	total: number;
	isEmpty: boolean;
	isPageFichas: boolean;
};

const useFichaStore = (): Out => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const list: Ficha[] = useAppSelector((state) => selectAll(state.ficha));
	const total = useAppSelector((state) => selectTotal(state.ficha));

	function create(datum: Ficha): void {
		dispatch(createFicha(datum));
	}

	function read(ids: SingleOrArray<string>): Ficha[] {
		const lista = toArray(ids);
		return list.filter(
			(ficha) => lista.findIndex((l) => ficha.id === l) !== -1,
		);
	}

	function update(obj: SingleOrArray<Ficha>): void {
		dispatch(updateFicha(toArray(obj)));
	}

	function remove(ids: SingleOrArray<string>): void {
		dispatch(removeFicha(toArray(ids)));
	}

	function changeFav(id: string): void {
		dispatch(invertFavorite(id));
	}

	return {
		list,
		total,
		read,
		update,
		remove,
		create,
		changeFav,
		isEmpty: total === 0,
		isPageFichas: location.pathname === RouteNames.FICHAS,
	};
};

export default useFichaStore;
