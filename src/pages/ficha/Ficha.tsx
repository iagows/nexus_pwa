import {
	Box,
	Button,
	Paper,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	type SxProps,
	type Theme,
} from "@mui/material";
import useAppNavigate, { ParamName } from "../../hooks/useAppNavigate";
import useEditFicha, {
	isProfileValid,
} from "../../stores/slices/edit/useEditFicha";
import FichaEditionBody from "./FichaEditionBody";
import FichaEditionProfile from "./FichaEditionProfile";
import FichaView from "./FichaView";

const PAPER_CSS: SxProps<Theme> = {
	padding: "1em 2em",
};

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
			content: <FichaEditionBody ficha={current} />,
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
								<StepContent>
									<Paper sx={PAPER_CSS} variant="outlined">
										{s.content}
									</Paper>
								</StepContent>
							</Step>
						))}
					</Stepper>
					<Button disabled={step === 0} onClick={goToPreviousStep}>
						Voltar
					</Button>
					<Button
						disabled={step > 0 || !isProfileValid(current.profile)}
						onClick={goToNextStep}
					>
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
