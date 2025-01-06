import {
	Box,
	Button,
	Paper,
	Step,
	StepContent,
	StepLabel,
	Stepper,
} from "@mui/material";
import type { PropsWithChildren } from "react";
import useAppNavigate, { ParamName } from "../../hooks/useAppNavigate";
import useEditFicha from "../../stores/slices/edit/useEditFicha";
import FichaEditionBody from "./FichaEditionBody";
import FichaEditionProfile from "./FichaEditionProfile";
import FichaView from "./FichaView";

const LocalPaper = ({ children }: PropsWithChildren) => (
	<Paper sx={{ padding: "1em 2em" }} variant="outlined">
		{children}
	</Paper>
);

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
									<LocalPaper>{s.content}</LocalPaper>
								</StepContent>
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
