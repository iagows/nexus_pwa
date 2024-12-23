import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { type ChangeEvent, type SyntheticEvent, useState } from "react";
import AppNumberInput from "../../components/AppNumberInput";
import AppTooltip from "../../components/AppTooltip";
import BodyText from "../../components/BodyText";
import { PERFIL } from "../../data/perfil";
import type { Info } from "../../models/InfoDTO";
import type { NamedInfo } from "../../models/NamedInfoDTO";
import AppToolBar from "../../navigation/AppToolbar";
import useEditFicha from "../../stores/slices/edit/useEditFicha";
import ProfileMapper from "../../components/ProfileMapper";

const handleChangeCreator = <T,>(max: number, setter: (val: T[]) => void) => {
	return (_: SyntheticEvent<Element, Event>, newValue: T[]) => {
		if (max > -1 && newValue.length > max) {
			newValue.shift();
		}
		setter(newValue);
	};
};

const FichaEdition = () => {
	const {
		current: { profile },
	} = useEditFicha();

	const [age, setAge] = useState<number>(profile.age);
	const [origin, setOrigin] = useState<Info[]>(profile.origin);
	const [antecedents, setAntecedents] = useState<Info[]>(profile.antecedents);
	const [objectives, setObjectives] = useState<NamedInfo[]>(profile.objectives);
	const [virtues, setVirtues] = useState<NamedInfo[]>(profile.virtues);
	const [defeitos, setDefeitos] = useState<NamedInfo[]>(profile.flaws);
	const [peculiaridades, setPeculiaridades] = useState<Info[]>(
		profile.peculiarities,
	);

	const handleAge = (
		evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		const {
			target: { value },
		} = evt;
		const val = Number.parseInt(value);
		const max = PERFIL.getAntecedents(val);
		if (antecedents.length > max) {
			const temp = [...antecedents];
			temp.length = max;
			setAntecedents(temp);
		}
		setAge(val);
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
					onChange={handleChangeCreator(2, setOrigin)}
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
						onChange={handleChangeCreator(
							PERFIL.getAntecedents(age),
							setAntecedents,
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
						onChange={handleChangeCreator(1, setObjectives)}
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
						onChange={handleChangeCreator(1, setVirtues)}
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
						value={defeitos}
						renderInput={(params) => (
							<TextField {...params} variant="standard" label="Defeito (1D)" />
						)}
						onChange={handleChangeCreator(1, setDefeitos)}
						size="small"
					/>
					<ProfileMapper data={defeitos} />
				</Box>

				<Box>
					<Autocomplete
						multiple
						disableCloseOnSelect
						id="peculiarities-standard"
						options={PERFIL.peculiaridades}
						getOptionLabel={(option) => option.descricao}
						value={peculiaridades}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								label="Peculiaridades (4D)"
							/>
						)}
						onChange={handleChangeCreator(-1, setPeculiaridades)}
						size="small"
						limitTags={2}
					/>
					<ProfileMapper data={peculiaridades} join />
				</Box>
			</Box>
		</>
	);
};

export default FichaEdition;
