import {
	Box,
	Button,
	Step,
	StepContent,
	StepLabel,
	Stepper,
} from "@mui/material";
import useAppNavigate, { ParamName } from "../../hooks/useAppNavigate";
import useEditFicha from "../../stores/slices/edit/useEditFicha";
import FichaEditionBody from "./FichaEditionBody";
import FichaEditionProfile from "./FichaEditionProfile";
import FichaView from "./FichaView";

const Ficha = () => {
	const { getParam } = useAppNavigate();
	const isEdit = getParam<boolean>(ParamName.EDIT);
	const { current, setProfile, step, goToPreviousStep, goToNextStep } =
		useEditFicha();

	const steps = [
		{
			label: "Perfil",
			content: (
				<FichaEditionProfile profile={current.profile} onProfile={setProfile} />
			),
		},
		{
			label: "Dados",
			content: <FichaEditionBody />,
		},
	];

	return (
		<>
			{isEdit ? (
				<Box>
					<Stepper activeStep={step} orientation="vertical">
						{steps.map((s) => (
							<Step key={s.label}>
								<StepLabel>{s.label}</StepLabel>
								<StepContent>{s.content}</StepContent>
							</Step>
						))}
					</Stepper>
					<Button disabled={step === 0} onClick={goToPreviousStep}>
						Voltar
					</Button>
					<Button disabled={step > 0} onClick={goToNextStep}>
						Próximo
					</Button>
				</Box>
			) : (
				<FichaView />
			)}
		</>
	);
};

export default Ficha;
