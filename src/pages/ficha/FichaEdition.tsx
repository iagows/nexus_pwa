import { Autocomplete, Box, Button, TextField } from "@mui/material";
import type { ChangeEvent, SyntheticEvent } from "react";
import AppNumberInput from "../../components/AppNumberInput";
import AppTooltip from "../../components/AppTooltip";
import BodyText from "../../components/BodyText";
import ProfileMapper from "../../components/ProfileMapper";
import { PERFIL } from "../../data/perfil";
import type { Profile } from "../../models/ProfileDTO";
import AppToolBar from "../../navigation/AppToolbar";

const handleChangeCreator = <T,>(max: number, setter: (val: T[]) => void) => {
	return (_: SyntheticEvent<Element, Event>, newValue: T[]) => {
		if (max > -1 && newValue.length > max) {
			newValue.shift();
		}
		setter(newValue);
	};
};

type Props = {
	profile: Profile;
	onProfile: (prof: Partial<Profile>) => void;
};

const FichaEdition = ({
	profile: {
		age,
		antecedents,
		description,
		flaws,
		objectives,
		origin,
		peculiarities,
		virtues,
	},
	onProfile,
}: Props) => {
	const handleAge = (
		evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		const {
			target: { value },
		} = evt;
		const val = Number.parseInt(value);
		const max = PERFIL.getAntecedents(val);
		const temp = [...antecedents];

		if (antecedents.length > max) {
			temp.length = max;
		}

		onProfile({
			antecedents: temp,
			age: val,
		});
	};

	return (
		<>
			<AppToolBar title="Edição - Perfil" />
			<BodyText sx={{ display: "flex", alignItems: "center" }}>
				Lembre-se que o narrador deve aprovar{" "}
				<AppTooltip
					title="Por que o Narrador deve aprovar?"
					text="NEXUS é um sistema genérico, criado para abranger inúmeros estilos de jogo. Mas o Narrador é quem vai determinar onde a aventura se passa e os personagens devem fazer sentido no mundo que ele está criando."
				/>
			</BodyText>
			<Button type="button" disabled>
				Sortear
			</Button>

			<Box
				sx={{
					maxWidth: 600,
				}}
			>
				<Autocomplete
					multiple
					disableCloseOnSelect
					id="origens-standard"
					options={PERFIL.origem}
					getOptionLabel={(option) => option.descricao}
					value={origin}
					renderInput={(params) => (
						<TextField {...params} variant="standard" label="Origem (2D)" />
					)}
					onChange={handleChangeCreator(2, (o) => onProfile({ origin: o }))}
					size="small"
				/>

				<Box>
					<AppNumberInput
						value={age}
						aria-label="Idade-input"
						placeholder="Digite a idade..."
						onChange={handleAge}
					/>
					<Autocomplete
						multiple
						limitTags={2}
						disableCloseOnSelect
						id="antecedents-standard"
						options={PERFIL.antecedentes}
						getOptionLabel={(option) => option.descricao}
						disabled={age < 10}
						value={antecedents}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								label="Antecedentes (2D)"
							/>
						)}
						onChange={handleChangeCreator(PERFIL.getAntecedents(age), (a) =>
							onProfile({ antecedents: a }),
						)}
						size="small"
					/>
					<ProfileMapper data={antecedents} join />
				</Box>

				<Box>
					<Autocomplete
						multiple
						id="objectives-standard"
						options={PERFIL.objetivos}
						getOptionLabel={(option) => option.nome}
						value={objectives}
						renderInput={(params) => (
							<TextField {...params} variant="standard" label="Objetivo (1D)" />
						)}
						onChange={handleChangeCreator(1, (o) =>
							onProfile({ objectives: o }),
						)}
						size="small"
					/>
					<ProfileMapper data={objectives} />
				</Box>

				<Box>
					<Autocomplete
						multiple
						id="virtues-standard"
						options={PERFIL.virtudes}
						getOptionLabel={(option) => option.nome}
						value={virtues}
						renderInput={(params) => (
							<TextField {...params} variant="standard" label="Virtude (1D)" />
						)}
						onChange={handleChangeCreator(1, (v) => onProfile({ virtues: v }))}
						size="small"
					/>
					<ProfileMapper data={virtues} />
				</Box>

				<Box>
					<Autocomplete
						multiple
						id="flaws-standard"
						options={PERFIL.defeitos}
						getOptionLabel={(option) => option.nome}
						value={flaws}
						renderInput={(params) => (
							<TextField {...params} variant="standard" label="Defeito (1D)" />
						)}
						onChange={handleChangeCreator(1, (f) => onProfile({ flaws: f }))}
						size="small"
					/>
					<ProfileMapper data={flaws} />
				</Box>

				<Box>
					<Autocomplete
						multiple
						disableCloseOnSelect
						id="peculiarities-standard"
						options={PERFIL.peculiaridades}
						getOptionLabel={(option) => option.descricao}
						value={peculiarities}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								label="Peculiaridades (4D)"
							/>
						)}
						onChange={handleChangeCreator(-1, (p) =>
							onProfile({ peculiarities: p }),
						)}
						size="small"
						limitTags={2}
					/>
					<ProfileMapper data={peculiarities} join />
				</Box>
			</Box>
		</>
	);
};

export default FichaEdition;
