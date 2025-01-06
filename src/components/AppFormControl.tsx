import {
	FormControl,
	InputLabel,
	type FormControlProps,
	type SxProps,
	type Theme,
} from "@mui/material";

const FORM_CSS: SxProps<Theme> = {
	m: 1,
	width: 300,
};

type Props = {
	label?: string;
} & FormControlProps;

const AppFormControl = ({ label, children, ...props }: Props) => {
	return (
		<>
			<FormControl {...props} sx={FORM_CSS}>
				{!!label && <InputLabel id={label}>{label}</InputLabel>}
				{children}
			</FormControl>
		</>
	);
};

export default AppFormControl;
