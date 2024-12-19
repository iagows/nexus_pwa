import { z } from "zod";

const OriginDTO = z.object({
	id: z.number(),
	descricao: z.string(),
});

type Origin = z.infer<typeof OriginDTO>;

export default OriginDTO;
export type { Origin };
