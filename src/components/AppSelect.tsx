import {
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	type SelectChangeEvent,
	type Theme,
	useTheme,
} from "@mui/material";
import type { Info } from "../models/InfoDTO";
import type { NamedInfo } from "../models/NamedInfoDTO";
import AppFormControl from "./AppFormControl";
import ProfileMapper from "./ProfileMapper";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(id: number, personName: number[], theme: Theme) {
	return {
		fontWeight: personName.includes(id)
			? theme.typography.fontWeightMedium
			: theme.typography.fontWeightRegular,
	};
}

const handleSelect = <T,>(setter: (val: T[]) => void, max: number) => {
	return (event: SelectChangeEvent<T>) => {
		const {
			target: { value },
		} = event;

		const newValue = value as T[];
		if (newValue.length > -1 && newValue.length > max && max !== -1) {
			newValue.shift();
		}

		setter(value as T[]);
	};
};

type Props<T extends Info | NamedInfo> = {
	list: T[];
	current: T[];
	max?: number;
	label: string;
	disabled?: boolean;
	onChange: (val: T[]) => void;
	describe: "hide" | "normal" | "join";
};

const AppSelect = <T extends Info | NamedInfo>({
	list,
	max = -1,
	label,
	current,
	onChange,
	describe = "hide",
	disabled = false,
}: Props<T>) => {
	const theme = useTheme();
	const newLabel = max === -1 ? label : `${label} (${max - current.length})`;
	return (
		<AppFormControl label={newLabel} disabled={disabled}>
			<Select
				labelId={newLabel}
				id="multi-select"
				multiple
				value={current as unknown as T}
				onChange={handleSelect(onChange, max)}
				input={<OutlinedInput label={newLabel} />}
				MenuProps={MenuProps}
			>
				{list.map((datum) => (
					<MenuItem
						key={datum.id}
						value={datum.id}
						style={getStyles(
							datum.id,
							current.map((o) => o.id),
							theme,
						)}
					>
						{datum.descricao}
					</MenuItem>
				))}
			</Select>
			{describe !== "hide" && (
				<ProfileMapper
					data={list.filter(
						(item) => current.indexOf(item.id as unknown as T) !== -1,
					)}
					join={describe === "join"}
				/>
			)}
		</AppFormControl>
	);
};

export default AppSelect;
