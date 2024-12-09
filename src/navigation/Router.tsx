import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RouteNames from "./RouteNames";
import ErrorPage from "../pages/ErrorPage";
import Fichas from "../pages/Fichas";
import Config from "../pages/Config";
import Habilidades from "../pages/Habilidades";
import QuebrarObjeto from "../pages/QuebrarObjeto";
import Sobre from "../pages/Sobre";

const BASENAME = "/nexus_pwa";

const router = createBrowserRouter(
	[
		{
			path: RouteNames.ROOT,
			element: <MainPage />,
			errorElement: <ErrorPage />,
			children: [
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
