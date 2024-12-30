import { FormGroup, Input } from "@mui/material";
import AppFormControl from "../../components/AppFormControl";
import BodyText from "../../components/BodyText";
import type { Ficha } from "../../models/FichaDTO";
import AppToolBar from "../../navigation/AppToolbar";
import AppNumberInput from "../../components/AppNumberInput";

type Props = {
	ficha: Ficha;
};
const FichaEditionBody = ({ ficha }: Props) => {
	return (
		<>
			<AppToolBar title="Edição - Dados" />
			<BodyText>{ficha.profile.description}</BodyText>
			<FormGroup>
				<AppFormControl label="Nome">
					<Input inputMode="text" />
				</AppFormControl>

				<AppFormControl label="Descrição">
					<Input inputMode="text" />
				</AppFormControl>
				<BodyText>Pontos</BodyText>
				<AppNumberInput label="Nível" />
				<BodyText>Limites</BodyText>
				<BodyText>Atributos</BodyText>
				<AppNumberInput label="Força" />
				<AppNumberInput label="Destreza" />
				<AppNumberInput label="Constituição" />
				<AppNumberInput label="Inteligência" />
				<AppNumberInput label="Sabedoria" />
				<AppNumberInput label="Carisma" />
			</FormGroup>
		</>
	);
};

export default FichaEditionBody;
