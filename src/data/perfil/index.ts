import AgeDTO from "../../models/AgeDTO";
import InfoDTO from "../../models/InfoDTO";
import NamedInfoDTO from "../../models/NamedInfoDTO";
import ages from "./ages.json";
import antecedents from "./antecedents.json";
import objectives from "./objectives.json";
import origins from "./origin.json";
import virtues from "./virtues.json";
import flaws from "./flaw.json";
import peculiarities from "./peculiarities.json";

const parser = (o: Record<string, unknown>) => InfoDTO.parse(o);
const namedParser = (o: Record<string, unknown>) => NamedInfoDTO.parse(o);
const ageParser = (o: Record<string, unknown>) => AgeDTO.parse(o);
const isInInterval = (age: number, from: number, to: number) =>
	age > from && age <= to;

const parsed = ages.map(ageParser);
const { min, max } = parsed.reduce(
	(acc, range) => {
		if (range.from < acc.min.from) {
			acc.min = range;
		}
		if (range.to > acc.max.to) {
			acc.max = range;
		}
		return acc;
	},
	{ min: parsed[0], max: parsed[0] },
);

// Se um dia pegar de um servidor, já tem a abstração
export const PERFIL = {
	origem: origins.map(parser),
	antecedentes: antecedents.map(parser),
	objetivos: objectives.map(namedParser),
	virtudes: virtues.map(namedParser),
	defeitos: flaws.map(namedParser),
	peculiaridades: peculiarities.map(parser),
	getAntecedents: (age: number) => {
		const found = parsed.find((range) =>
			isInInterval(age, range.from, range.to),
		);

		if (found) {
			return found.antecedents;
		}

		if (age < min.from) return min.antecedents;
		if (age > max.to) return max.antecedents;

		throw new Error("Algo errado não está certo");
	},
};
