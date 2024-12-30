import { Input, type InputProps } from "@mui/material";
import AppFormControl from "./AppFormControl";

const controlKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];

type Props = {
	label: string;
	width?: number;
} & InputProps;

const AppNumberInput = ({ label, width, ...props }: Props) => {
	return (
		<AppFormControl label={label}>
			<Input
				{...props}
				inputMode="numeric"
				onKeyDown={(evt) => {
					if (controlKeys.includes(evt.key)) {
						console.log("oxe");
						return;
					}
				}}
			/>
		</AppFormControl>
	);
};

export default AppNumberInput;
