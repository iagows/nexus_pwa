import { useLocation } from "react-router-dom";
import RouteNames, { type RouteInfoType } from "../navigation/RouteNames";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const getRouteInfo = (id = "", edit = false): RouteInfoType[][] => {
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

type Out = {
	routeInfo: RouteInfoType[][];
	pageTitle: string;
};
const useRouteData = (): Out => {
	const location = useLocation();

	const routeInfo = getRouteInfo();

	const pageTitle =
		routeInfo.flat(1).filter((item) => item.url === location.pathname)?.[0]
			?.text ?? "Nexus";
	return {
		routeInfo,
		pageTitle,
	};
};

export default useRouteData;
