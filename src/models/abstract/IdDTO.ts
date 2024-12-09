import { z } from "zod";

export const IdDTO = z.object({
	id: z.string(),
});

export type IdType = z.infer<typeof IdDTO>;
