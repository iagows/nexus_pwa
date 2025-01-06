import { PERFIL } from "../../../data/perfil";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { Ficha } from "../../../models/FichaDTO";
import type { Profile } from "../../../models/ProfileDTO";
import { nextStep, prevStep, setEdit } from "./";

export const isProfileValid = (profile: Partial<Profile>): boolean => {
	const antecedents = PERFIL.getAntecedents(profile?.age ?? 0);

	return (
		profile.origin?.length === 1 &&
		profile.antecedents?.length === antecedents &&
		profile.objectives?.length === 1 &&
		profile.virtues?.length === 1 &&
		profile.flaws?.length === 1 &&
		!!profile.details
	);
};

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
		console.log({
			profile,
		});
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
