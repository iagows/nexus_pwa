import { z } from "zod";

const TitleModel = z.object({
	title: z.string(),
});

type TitleModelType = z.infer<typeof TitleModel>;

export default TitleModel;
export type { TitleModelType };
