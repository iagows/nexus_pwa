import { Autocomplete, TextField } from "@mui/material";
import { type ChangeEvent, type SyntheticEvent, useState } from "react";
import AppNumberInput from "../../components/AppNumberInput";
import AppTooltip from "../../components/AppTooltip";
import BodyText from "../../components/BodyText";
import { PERFIL } from "../../data/perfil";
import type { Info } from "../../models/InfoDTO";
import type { NamedInfo } from "../../models/NamedInfoDTO";
import AppToolBar from "../../navigation/AppToolbar";

const handleChangeCreator = <T,>(max: number, setter: (val: T[]) => void) => {
	return (_: SyntheticEvent<Element, Event>, newValue: T[]) => {
		if (max > -1 && newValue.length > max) {
			newValue.shift();
		}
		setter(newValue);
	};
};

const FichaEdition = () => {
	const [age, setAge] = useState<number>(100);
	const [origin, setOrigin] = useState<Info[]>([]);
	const [antecedents, setAntecedents] = useState<Info[]>([]);
	const [objectives, setObjectives] = useState<NamedInfo[]>([]);

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
			<BodyText>
				Lembre-se que o narrador deve aprovar{" "}
				<AppTooltip
					title="Por que o Narrador deve aprovar?"
					text="NEXUS é um sistema genérico, criado para abranger inúmeros estilos de jogo. Mas o Narrador é quem vai determinar onde a aventura se passa e os personagens devem fazer sentido no mundo que ele está criando."
				/>
			</BodyText>
			<p>
				dar a opção de fazer manualmente ou 'digitar a idade', apertar um botão
				e o resto é automático
			</p>
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
				id="origens-standard"
				options={PERFIL.antecedentes}
				getOptionLabel={(option) => option.descricao}
				disabled={age < 10}
				value={antecedents}
				renderInput={(params) => (
					<TextField {...params} variant="standard" label="Antecedentes (2D)" />
				)}
				onChange={handleChangeCreator(
					PERFIL.getAntecedents(age),
					setAntecedents,
				)}
				size="small"
			/>

			<Autocomplete
				multiple
				id="origens-standard"
				options={PERFIL.objetivos}
				getOptionLabel={(option) => option.nome}
				value={objectives}
				renderInput={(params) => (
					<TextField {...params} variant="standard" label="Objetivo (1D)" />
				)}
				onChange={handleChangeCreator(1, setObjectives)}
				size="small"
			/>

			<Autocomplete
				multiple
				id="origens-standard"
				options={PERFIL.origem}
				getOptionLabel={(option) => option.descricao}
				value={origin}
				renderInput={(params) => (
					<TextField {...params} variant="standard" label="Virtude (1D)" />
				)}
				onChange={handleChangeCreator(1, setOrigin)}
				size="small"
			/>

			<Autocomplete
				multiple
				id="origens-standard"
				options={PERFIL.origem}
				getOptionLabel={(option) => option.descricao}
				value={origin}
				renderInput={(params) => (
					<TextField {...params} variant="standard" label="Defeito (1D)" />
				)}
				onChange={handleChangeCreator(1, setOrigin)}
				size="small"
			/>

			<Autocomplete
				multiple
				id="origens-standard"
				options={PERFIL.origem}
				getOptionLabel={(option) => option.descricao}
				value={origin}
				renderInput={(params) => (
					<TextField
						{...params}
						variant="standard"
						label="Peculiaridades (4D)"
					/>
				)}
				onChange={handleChangeCreator(-1, setOrigin)}
				size="small"
			/>
		</>
	);
};

export default FichaEdition;
