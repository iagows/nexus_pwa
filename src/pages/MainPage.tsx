import { Box, type SxProps, type Theme } from "@mui/material";
import { useLocation } from "react-router-dom";
import empty from "../assets/images/empty.jpg";
import nonEmpty from "../assets/images/non-empty.jpg";
import AppMainLayout from "../navigation/AppMainLayout";
import RouteNames from "../navigation/RouteNames";
import useFichaStore from "../stores/slices/ficha/useFichaStore";

const bgCss: (isEmpty: boolean) => SxProps<Theme> = (isEmpty) => ({
	backgroundImage: `url(${isEmpty ? empty : nonEmpty})`,
	backgroundSize: "cover", // Para cobrir toda a área
	backgroundPosition: "center", // Para centralizar a imagem
	height: "100vh", // Altura da tela inteira
	color: "white", // Cor do texto, se necessário
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const useMain = () => {
	const location = useLocation();
	return location.pathname === RouteNames.FICHAS;
};

const MainPage = () => {
	const isPageFichas = useMain();
	const { isEmpty } = useFichaStore();

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			sx={isPageFichas ? bgCss(isEmpty) : null}
		>
			<Box display={"flex"}>
				<AppMainLayout />
			</Box>
		</Box>
	);
};

export default MainPage;
