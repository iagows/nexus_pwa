import InfoDTO from "../../models/InfoDTO";
import NamedInfoDTO from "../../models/NamedInfoDTO";
import antecedents from "./antecedents.json";
import objectives from "./objectives.json";
import origins from "./origin.json";

const parser = (o: Record<string, unknown>) => InfoDTO.parse(o);
const namedParser = (o: Record<string, unknown>) => {
	console.log(o);
	return NamedInfoDTO.parse(o);
};
// Se um dia pegar de um servidor, já tem a abstração
export const PERFIL = {
	origem: origins.map(parser),
	antecedentes: antecedents.map(parser),
	objetivos: objectives.map(namedParser),
};
