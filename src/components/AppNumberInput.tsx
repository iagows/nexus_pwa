import { Input, type InputProps } from "@mui/material";
import AppFormControl from "./AppFormControl";

const controlKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];

type Props = {
	label: string;
} & InputProps;

const AppNumberInput = ({ label, ...props }: Props) => {
	return (
		<AppFormControl label={label}>
			<Input
				{...props}
				inputMode="numeric"
				onKeyDown={(evt) => {
					if (controlKeys.includes(evt.key)) {
						return;
					}
				}}
			/>
		</AppFormControl>
	);
};

export default AppNumberInput;
