import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

enum RouteNames {
	ROOT = "/",
	FICHAS = "/fichas",
	FICHA = "/ficha/:id",
	EDITAR_FICHA = "/ficha/:id/?edit=true",
	HABILIDADES = "/habilidades",
	QUEBRAR = "/quebrar_objeto",
	CONFIGURACOES = "/configuracoes",
	SOBRE = "/sobre",
}

export default RouteNames;

export type RouteInfoType = {
	text: string;
	url: string;
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};
