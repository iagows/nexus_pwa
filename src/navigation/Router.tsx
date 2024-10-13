import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RouteNames from "./RouteNames";
import ErrorPage from "../pages/ErrorPage";
import Fichas from "../pages/Fichas";

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
