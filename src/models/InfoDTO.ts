import { z } from "zod";

const InfoDTO = z.object({
	id: z.number(),
	descricao: z.string(),
});

type Info = z.infer<typeof InfoDTO>;

export default InfoDTO;
export type { Info };
