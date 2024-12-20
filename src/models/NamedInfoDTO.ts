import { z } from "zod";
import InfoDTO from "./InfoDTO";

const NamedInfoDTO = InfoDTO.extend({
	nome: z.string(),
});

type NamedInfo = z.infer<typeof NamedInfoDTO>;

export default NamedInfoDTO;
export type { NamedInfo };
