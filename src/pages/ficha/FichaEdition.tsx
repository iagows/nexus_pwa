import { Box, Button, FormControl } from "@mui/material";
import type { ChangeEvent } from "react";
import AppNumberInput from "../../components/AppNumberInput";
import AppSelect from "../../components/AppSelect";
import AppTooltip from "../../components/AppTooltip";
import BodyText from "../../components/BodyText";
import { PERFIL } from "../../data/perfil";
import type { Profile } from "../../models/ProfileDTO";
import AppToolBar from "../../navigation/AppToolbar";

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

			<AppSelect
				max={1}
				current={origin}
				describe={"hide"}
				label="Origem (2D)"
				list={PERFIL.origem}
				onChange={(o) => onProfile({ origin: o })}
			/>
			<AppNumberInput
				value={age}
				aria-label="Idade-input"
				placeholder="Digite a idade..."
				onChange={handleAge}
			/>
			<AppSelect
				max={PERFIL.getAntecedents(age)}
				current={antecedents}
				describe="join"
				label="Antecedentes (2D)"
				list={PERFIL.antecedentes}
				onChange={(a) => onProfile({ antecedents: a })}
			/>
			<AppSelect
				max={1}
				current={objectives}
				describe={"normal"}
				label="Objetivo (1D)"
				list={PERFIL.objetivos}
				onChange={(o) => onProfile({ objectives: o })}
			/>
			<AppSelect
				max={1}
				current={virtues}
				describe={"normal"}
				label="Virtude (1D)"
				list={PERFIL.virtudes}
				onChange={(v) => onProfile({ virtues: v })}
			/>
			<AppSelect
				max={1}
				current={flaws}
				describe={"normal"}
				label="Defeito (1D)"
				list={PERFIL.defeitos}
				onChange={(f) => onProfile({ flaws: f })}
			/>
			<AppSelect
				current={peculiarities}
				describe={"join"}
				label="Peculiaridades (4D)"
				list={PERFIL.peculiaridades}
				onChange={(p) => onProfile({ peculiarities: p })}
			/>
		</>
	);
};

export default FichaEdition;
