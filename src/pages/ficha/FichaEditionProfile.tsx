import { Button, FormGroup, Grid2, Input } from "@mui/material";
import type { ChangeEvent } from "react";
import AppFormControl from "../../components/AppFormControl";
import AppNumberInput from "../../components/AppNumberInput";
import AppSelect from "../../components/AppSelect";
import AppTooltip from "../../components/AppTooltip";
import BodyText from "../../components/BodyText";
import { PERFIL } from "../../data/perfil";
import type { Profile } from "../../models/ProfileDTO";
import AppToolBar from "../../navigation/AppToolbar";
import type { Info } from "../../models/InfoDTO";

type Props = {
	profile: Profile;
	onProfile: (prof: Partial<Profile>) => void;
};

const handleAge =
	(
		antecedents: Info[],
		onProfile: (data: { antecedents: Info[]; age: number }) => void,
	) =>
	(evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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

const FichaEditionProfile = ({
	profile: {
		age,
		antecedents,
		details: description,
		flaws,
		objectives,
		origin,
		peculiarities,
		virtues,
	},
	onProfile,
}: Props) => {
	const antecedentsLimit = PERFIL.getAntecedents(age);
	const canSelectAntecedents = antecedentsLimit > 0;

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

			<Grid2
				container
				spacing={{ sm: 1, md: 3 }}
				direction={"column"}
				sx={{
					justifyContent: "center",
					alignItems: "stretch",
				}}
			>
				<Grid2 size={12}>
					<FormGroup>
						<AppFormControl>
							<Button type="button" disabled>
								Sortear
							</Button>
						</AppFormControl>
					</FormGroup>
				</Grid2>
				<Grid2 size={"grow"}>
					<AppSelect
						max={1}
						current={origin}
						describe={"hide"}
						label="Origem (2D)"
						list={PERFIL.origem}
						onChange={(o) => onProfile({ origin: o })}
					/>
				</Grid2>
				<Grid2 size={{ xs: "grow", sm: 6 }}>
					<AppNumberInput
						label="Idade"
						value={age}
						aria-label="Idade-input"
						placeholder="Digite a idade..."
						onChange={handleAge(antecedents, onProfile)}
					/>
				</Grid2>
				<Grid2 size={{ xs: "grow", sm: 6 }}>
					<AppSelect
						max={antecedentsLimit}
						current={antecedents}
						disabled={!canSelectAntecedents}
						describe="join"
						label="Antecedentes (2D)"
						list={PERFIL.antecedentes}
						onChange={(a) => onProfile({ antecedents: a })}
					/>
				</Grid2>
				<Grid2 size={4}>
					<AppSelect
						max={1}
						current={objectives}
						describe={"normal"}
						label="Objetivo (1D)"
						list={PERFIL.objetivos}
						onChange={(o) => onProfile({ objectives: o })}
					/>
				</Grid2>
				<Grid2 size={4}>
					<AppSelect
						max={1}
						current={virtues}
						describe={"normal"}
						label="Virtude (1D)"
						list={PERFIL.virtudes}
						onChange={(v) => onProfile({ virtues: v })}
					/>
				</Grid2>
				<Grid2 size={4}>
					<AppSelect
						max={1}
						current={flaws}
						describe={"normal"}
						label="Defeito (1D)"
						list={PERFIL.defeitos}
						onChange={(f) => onProfile({ flaws: f })}
					/>
				</Grid2>{" "}
				<Grid2 size={4}>
					<AppSelect
						current={peculiarities}
						describe={"join"}
						label="Peculiaridades (4D)"
						list={PERFIL.peculiaridades}
						onChange={(p) => onProfile({ peculiarities: p })}
					/>
				</Grid2>
				<Grid2 size={12}>
					<AppFormControl label={"Juntando tudo"}>
						<Input
							multiline
							maxRows={5}
							inputMode="text"
							value={description}
							onChange={(d) => onProfile({ details: d.target.value })}
						/>
					</AppFormControl>
				</Grid2>
				<BodyText>Fazer: validar os valores</BodyText>
			</Grid2>
		</>
	);
};

export default FichaEditionProfile;
