import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

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
	menu: string;
	url: string;
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export const routeInfo = (id = "", edit = false): RouteInfoType[][] => {
	const atual: RouteInfoType | null =
		id !== ""
			? {
					menu: "Ficha Atual",
					url: `${RouteNames.FICHA.replace(":id", id)}`,
					icon: ContactPageOutlinedIcon,
				}
			: null;

	return [
		[
			atual,
			{
				menu: "Fichas",
				url: RouteNames.FICHAS,
				icon: MenuBookOutlinedIcon,
			},
		].filter((item) => item !== null),
		[
			{
				menu: "Habilidades",
				url: RouteNames.HABILIDADES,
				icon: ArchitectureOutlinedIcon,
			},
			{
				menu: "Quebrar objeto",
				url: RouteNames.QUEBRAR,
				icon: BlurOnOutlinedIcon,
			},
		],
		[
			{
				menu: "Configurações",
				url: RouteNames.CONFIGURACOES,
				icon: SettingsOutlinedIcon,
			},
			{
				menu: "Sobre",
				url: RouteNames.SOBRE,
				icon: InfoOutlinedIcon,
			},
		],
	];
};
