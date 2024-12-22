import { z } from "zod";
import InfoDTO from "./InfoDTO";
import NamedInfoDTO from "./NamedInfoDTO";

const ProfileDTO = z.object({
	age: z.number(),
	description: z.string(),
	origin: z.array(InfoDTO),
	antecedents: z.array(InfoDTO),
	objectives: z.array(NamedInfoDTO),
	virtues: z.array(NamedInfoDTO),
	flaws: z.array(NamedInfoDTO),
});

type Profile = z.infer<typeof ProfileDTO>;

export default ProfileDTO;
export type { Profile };
