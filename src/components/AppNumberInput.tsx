import { Input, type InputProps } from "@mui/material";

const controlKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];

const AppNumberInput = ({ ...props }: InputProps) => {
	return (
		<Input
			{...props}
			inputMode="numeric"
			onKeyDown={(evt) => {
				if (controlKeys.includes(evt.key)) {
					return;
				}
				if (!/^[0-9]$/.test(evt.key)) {
					evt.preventDefault();
				}
			}}
		/>
	);
};

export default AppNumberInput;
