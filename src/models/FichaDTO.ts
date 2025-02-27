import { z } from "zod";
import { IdDTO } from "./abstract/IdDTO";
import ProfileDTO from "./ProfileDTO";

export enum ModoDaFicha {
	CRIACAO = "Criação",
	COMBATE = "Combate",
	EVOLUCAO = "Evolução",
	VISUALIZACAO = "Visualização",
}

const FichaDTO = z
	.object({
		xp: z.number(),
		nome: z.string(),
		nivel: z.number(),
		criacao: z.string(),
		profile: ProfileDTO,
		narrador: z.string(),
		imagem: z.string().optional(),
		ultimaVisualizacao: z.string(),
		modo: z.nativeEnum(ModoDaFicha),
		isFavorito: z.boolean().optional(),
	})
	.merge(IdDTO);

type Ficha = z.infer<typeof FichaDTO>;

export default FichaDTO;
export type { Ficha };
