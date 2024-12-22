import { Autocomplete, type AutocompleteProps, TextField } from "@mui/material";
import type { SyntheticEvent } from "react";

const handleChangeCreator = <T,>(max: number, setter: (val: T[]) => void) => {
	return (_: SyntheticEvent<Element, Event>, newValue: (string | T)[]) => {
		if (max > -1 && newValue.length > max) {
			newValue.shift();
		}

		setter(newValue as T[]);
	};
};

type Props<T> = {
	label: string;
	setter: (v: T[]) => void;
} & AutocompleteProps<T, true, boolean, boolean, "div">;

const AppAutocomplete = <T,>({ label, setter, ...props }: Props<T>) => (
	<Autocomplete
		{...props}
		id="origens-standard"
		renderInput={(params) => (
			<TextField {...params} variant="standard" label={label} />
		)}
		onChange={handleChangeCreator(2, setter)}
		size="small"
	/>
);

export default AppAutocomplete;
