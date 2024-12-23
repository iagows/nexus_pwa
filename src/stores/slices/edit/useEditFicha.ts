import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { Ficha } from "../../../models/FichaDTO";
import type { Profile } from "../../../models/ProfileDTO";
import { nextStep, prevStep, setEdit } from "./";

type Out = {
	current: Ficha;
	step: number;
	setCurrent: (current: Ficha) => void;
	goToNextStep: () => void;
	goToPreviousStep: () => void;

	setProfile: (profile: Partial<Profile>) => void;
};
const useEditFicha = (): Out => {
	const dispatcher = useAppDispatch();
	const { current, step } = useAppSelector((state) => state.edition);

	const setCurrent = (ficha: Ficha): void => {
		dispatcher(setEdit(ficha));
	};

	const setProfile = (profile: Partial<Profile>): void => {
		setCurrent({
			...current,
			profile: {
				...current.profile,
				...profile,
			},
		});
	};

	const goToNextStep = () => {
		dispatcher(nextStep());
	};

	const goToPreviousStep = () => {
		dispatcher(prevStep());
	};

	return {
		step,
		current,
		setCurrent,
		goToNextStep,
		goToPreviousStep,
		setProfile,
	};
};

export default useEditFicha;
