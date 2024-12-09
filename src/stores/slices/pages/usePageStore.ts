import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setTitle as sliceSetTitle } from "./";

type Out = {
	title: string;
	setTitle: (title: string) => void;
};

const usePageStore = (): Out => {
	const dispatcher = useAppDispatch();
	const { title } = useAppSelector((store) => store.page);
	const setTitle = (title: string) => {
		dispatcher(sliceSetTitle(title));
	};
	return {
		title,
		setTitle,
	};
};

export default usePageStore;
