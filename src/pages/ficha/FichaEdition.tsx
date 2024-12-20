import { Autocomplete, TextField } from "@mui/material";
import { type SyntheticEvent, useState } from "react";
import AppNumberInput from "../../components/AppNumberInput";
import AppTooltip from "../../components/AppTooltip";
import BodyText from "../../components/BodyText";
import { PERFIL } from "../../data/perfil";
import type { Info } from "../../models/InfoDTO";
import type { NamedInfo } from "../../models/NamedInfoDTO";
import AppToolBar from "../../navigation/AppToolbar";

const handleChangeCreator = <T,>(max: number, setter: (val: T[]) => void) => {
	return (_: SyntheticEvent<Element, Event>, newValue: T[]) => {
		if (max > 0 && newValue.length > max) {
			newValue.shift();
		}
		setter(newValue);
	};
};

const FichaEdition = () => {
	const [origin, setOrigin] = useState<Info[]>([]);
	const [antecedents, setAntecedents] = useState<Info[]>([]);
	const [objectives, setObjectives] = useState<NamedInfo[]>([]);

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
				id="origens-standard"
				options={PERFIL.origem}
				getOptionLabel={(option) => option.descricao}
				defaultValue={origin}
				renderInput={(params) => (
					<TextField {...params} variant="standard" label="Origem (2D)" />
				)}
				onChange={handleChangeCreator(2, setOrigin)}
				size="small"
			/>

			<p>Antecedentes 2D</p>
			<AppNumberInput
				aria-label="Idade-input"
				placeholder="Digite a idade..."
			/>
			<p>Criança até 10 anos 0x</p>
			<p>Adolescente, 10~16, 1x</p>
			<p>Jovem, 17~25, 2x</p>
			<p>Adulto, 26~40, 3x</p>
			<p>Velho, 40~60, 4x</p>
			<p>Muito velho, 60+, 5x</p>
			<Autocomplete
				multiple
				id="origens-standard"
				options={PERFIL.antecedentes}
				getOptionLabel={(option) => option.descricao}
				defaultValue={antecedents}
				renderInput={(params) => (
					<TextField {...params} variant="standard" label="Antecedentes (2D)" />
				)}
				onChange={handleChangeCreator(2, setAntecedents)}
				size="small"
			/>

			<Autocomplete
				multiple
				id="origens-standard"
				options={PERFIL.objetivos}
				getOptionLabel={(option) => option.nome}
				defaultValue={objectives}
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
				defaultValue={origin}
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
				defaultValue={origin}
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
				defaultValue={origin}
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
