import { z } from "zod";

const AgeDTO = z.object({
	from: z.number().min(0).default(0),
	to: z.number().default(100),
	antecedents: z.number().min(0).max(5).default(0),
});

type Age = z.infer<typeof AgeDTO>;

export default AgeDTO;
export type { Age };
