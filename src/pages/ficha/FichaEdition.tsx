import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import AppTooltip from "../../components/AppTooltip";
import AppToolBar from "../../navigation/AppToolbar";
import { useState } from "react";

import { PERFIL } from "../../data/perfil";
import BodyText from "../../components/BodyText";

const FichaEdition = () => {
	const [origin, setOrigin] = useState<number>(2);

	const handleChange = (event: SelectChangeEvent) => {
		setOrigin(Number.parseInt(event.target.value));
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
			<p>Origem 2D</p>
			<Select
				labelId="Origin-select"
				id="origin-select"
				value={`${origin}`}
				label="Origem"
				onChange={handleChange}
			>
				{PERFIL.origem.map((item) => (
					<MenuItem key={item.id} value={item.id}>
						{item.descricao}
					</MenuItem>
				))}
			</Select>
			<p>Antecedentes 2D</p>
			<p>lista</p>

			<p>Idade</p>
			<p>input</p>
			<p>Criança até 10 anos 0x</p>
			<p>Adolescente, 10~16, 1x</p>
			<p>Jovem, 17~25, 2x</p>
			<p>Adulto, 26~40, 3x</p>
			<p>Velho, 40~60, 4x</p>
			<p>Muito velho, 60+, 5x</p>
			<p>Objetivo 1D</p>
			<p>Virtude 1D</p>
			<p>Defeito 1D</p>
			<p>Peculiaridades 4D</p>
			<p>Juntando tudo</p>
		</>
	);
};

export default FichaEdition;
