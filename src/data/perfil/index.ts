import OriginDTO from "../../models/OriginDTO";
import origin from "./origin.json";

// Se um dia pegar de um servidor, já tem a abstração
export const PERFIL = {
	origem: origin.origins.map((o) => OriginDTO.parse(o)),
};
