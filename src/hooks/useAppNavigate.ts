import { useNavigate, useSearchParams } from "react-router-dom";
import type { Ficha } from "../models/FichaDTO";
import RouteNames from "../navigation/RouteNames";

export enum ParamName {
	EDIT = "edit",
}

export type Param = {
	name: ParamName;
	value: unknown;
};

const ParamToValue = <T>(param: Param): T => param.value as T;

type Out = {
	getParams: () => Param[];
	getParam: <T>(name: ParamName) => T;
	goToEditFicha: (ficha: Ficha) => void;
};

const paramToString = (param: Param): string => {
	return `${param.name}=${param.value}`;
};

const mountQuery = (params: Param[]): string => {
	return `?${params.map(paramToString)}`;
};

const getPath = (path: RouteNames): string =>
	path.slice(0, 1 + path.indexOf("/", 1));

const useAppNavigate = (): Out => {
	const navigate = useNavigate();

	const goToEditFicha = (ficha: Ficha): void => {
		const query = mountQuery([{ name: ParamName.EDIT, value: true }]);
		const path = getPath(RouteNames.FICHA);
		navigate(`${path}${ficha.id}${query}`);
	};

	const getParams = (): Param[] => {
		const [searchParams] = useSearchParams();

		return Object.values(ParamName)
			.map((name) => ({ name, value: searchParams.get(name) }))
			.filter((item) => item.value !== null);
	};

	const getParam = <T>(name: ParamName): T => {
		const [searchParams] = useSearchParams();
		return searchParams.get(name) as T;
	};

	return {
		goToEditFicha,
		getParams,
		getParam,
	};
};

export default useAppNavigate;
