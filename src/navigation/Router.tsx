import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import MainPage from "../pages/MainPage";
import RouteNames from "./RouteNames";
import ErrorPage from "../pages/ErrorPage";
import Fichas from "../pages/ficha/Fichas";
import Config from "../pages/Config";
import Habilidades from "../pages/Habilidades";
import QuebrarObjeto from "../pages/QuebrarObjeto";
import Sobre from "../pages/Sobre";
import Ficha from "../pages/ficha/Ficha";

const BASENAME = "/nexus_pwa";

const router = createBrowserRouter(
	[
		{
			path: RouteNames.ROOT,
			element: <MainPage />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true, // Define a rota padrão
					element: <Navigate to={RouteNames.FICHAS} replace />,
				},
				{
					path: RouteNames.FICHA,
					element: <Ficha />,
				},
				{
					path: RouteNames.FICHAS,
					element: <Fichas />,
				},
				{
					path: RouteNames.CONFIGURACOES,
					element: <Config />,
				},
				{
					path: RouteNames.HABILIDADES,
					element: <Habilidades />,
				},
				{
					path: RouteNames.QUEBRAR,
					element: <QuebrarObjeto />,
				},
				{
					path: RouteNames.SOBRE,
					element: <Sobre />,
				},
				{
					path: "*",
					element: <Navigate to={RouteNames.FICHAS} replace />,
				},
			],
		},
	],
	{
		basename: BASENAME,
	},
);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
