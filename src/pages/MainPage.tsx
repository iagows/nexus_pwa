import { Box, type SxProps, type Theme } from "@mui/material";
import { useLocation } from "react-router-dom";
import empty from "../assets/images/empty.jpg";
import nonEmpty from "../assets/images/non-empty.jpg";
import AppMainLayout from "../navigation/AppMainLayout";
import RouteNames from "../navigation/RouteNames";
import useFichaStore from "../stores/slices/ficha/useFichaStore";

const FIXED_CSS: SxProps<Theme> = {
	backgroundSize: "cover", // Para cobrir toda a área
	backgroundPosition: "center", // Para centralizar a imagem
	height: "100vh", // Altura da tela inteira
	color: "white", // Cor do texto, se necessário
	display: "flex",
	alignItems: "center",
	backgroundRepeat: "no-repeat", // Evita repetição da imagem
	backgroundAttachment: "fixed", // Mantém o fundo fixo durante a rolagem
	overflowY: "auto", // Adiciona barra de rolagem se necessário
};

const bgCss: (isEmpty: boolean) => SxProps<Theme> = (isEmpty) => ({
	...FIXED_CSS,
	backgroundImage: `url(${isEmpty ? empty : nonEmpty})`,
});

const MainPage = () => {
	const { isEmpty, isPageFichas } = useFichaStore();

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			sx={isPageFichas ? bgCss(isEmpty) : FIXED_CSS}
		>
			<Box display={"flex"}>
				<AppMainLayout />
			</Box>
		</Box>
	);
};

export default MainPage;
