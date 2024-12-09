import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
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

export const routeInfo = (id = "", edit = false): RouteInfoType[][] => {
	const atual: RouteInfoType | null =
		id !== ""
			? {
					text: "Ficha Atual",
					url: `${RouteNames.FICHA.replace(":id", id)}`,
					icon: ContactPageOutlinedIcon,
				}
			: null;

	return [
		[
			atual,
			{
				text: "Fichas",
				url: RouteNames.FICHAS,
				icon: MenuBookOutlinedIcon,
			} as RouteInfoType,
		].filter((item) => item !== null),
		[
			{
				text: "Habilidades",
				url: RouteNames.HABILIDADES,
				icon: ArchitectureOutlinedIcon,
			},
			{
				text: "Quebrar objeto",
				url: RouteNames.QUEBRAR,
				icon: BlurOnOutlinedIcon,
			},
		],
		[
			{
				text: "Configurações",
				url: RouteNames.CONFIGURACOES,
				icon: SettingsOutlinedIcon,
			},
			{
				text: "Sobre",
				url: RouteNames.SOBRE,
				icon: InfoOutlinedIcon,
			},
		],
	];
};
