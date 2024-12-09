import { z } from "zod";
import { IdDTO } from "./abstract/IdDTO";

export enum ModoDaFicha {
	CRIACAO = "Criação",
	COMBATE = "Combate",
	EVOLUCAO = "Evolução",
	VISUALIZACAO = "Visualização",
}

const FichaDTO = z
	.object({
		xp: z.number(),
		modo: z.nativeEnum(ModoDaFicha),
		nome: z.string(),
		nivel: z.number(),
		criacao: z.string(),
		narrador: z.string(),
		ultimaVisualizacao: z.string(),
		isFavorito: z.boolean().optional(),
	})
	.merge(IdDTO);

type Ficha = z.infer<typeof FichaDTO>;

export default FichaDTO;
export type { Ficha };
