import { Box } from "@mui/material";
import AppMainLayout from "../navigation/AppMainLayout";

import empty from "../assets/images/empty.jpg";
import nonEmpty from "../assets/images/non-empty.jpg";
import useFichaStore from "../stores/slices/ficha/useFichaStore";

const MainPage = () => {
	const { list } = useFichaStore();

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			sx={{
				backgroundImage: `url(${list.length === 0 ? empty : nonEmpty})`,
				backgroundSize: "cover", // Para cobrir toda a área
				backgroundPosition: "center", // Para centralizar a imagem
				height: "100vh", // Altura da tela inteira
				color: "white", // Cor do texto, se necessário
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box display={"flex"}>
				<AppMainLayout />
			</Box>
		</Box>
	);
};

export default MainPage;
