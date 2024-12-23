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
import FichaEdition from "./FichaEdition";
import FichaView from "./FichaView";
import BodyText from "../../components/BodyText";

const Ficha = () => {
	const { getParam } = useAppNavigate();
	const isEdit = getParam<boolean>(ParamName.EDIT);
	const { current, setProfile, step, goToPreviousStep, goToNextStep } =
		useEditFicha();

	const steps = [
		{
			label: "Perfil",
			content: (
				<FichaEdition profile={current.profile} onProfile={setProfile} />
			),
		},
		{
			label: "Bla",
			content: <BodyText>Fazer</BodyText>,
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
					<Button onClick={goToNextStep}>Próximo</Button>
				</Box>
			) : (
				<FichaView />
			)}
		</>
	);
};

export default Ficha;
