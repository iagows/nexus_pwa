import { FormControl, Input, type InputProps } from "@mui/material";

const controlKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];

type Props = {
	width?: number;
} & InputProps;
const AppNumberInput = ({ width, ...props }: Props) => {
	return (
		<FormControl sx={{ m: 1, width }}>
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
		</FormControl>
	);
};

export default AppNumberInput;
