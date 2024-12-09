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
};

export const routeInfo = (id = "", edit = false): RouteInfoType[][] => {
	const atual: RouteInfoType | null =
		id !== ""
			? {
					menu: "Ficha Atual",
					url: `${RouteNames.FICHA.replace(":id", id)}`,
				}
			: null;

	return [
		[
			atual,
			{
				menu: "Fichas",
				url: RouteNames.FICHAS,
			},
		].filter((item) => item !== null),
		[
			{
				menu: "Habilidades",
				url: RouteNames.HABILIDADES,
			},
			{
				menu: "Quebrar objeto",
				url: RouteNames.QUEBRAR,
			},
		],
		[
			{
				menu: "Configurações",
				url: RouteNames.CONFIGURACOES,
			},
			{
				menu: "Sobre",
				url: RouteNames.SOBRE,
			},
		],
	];
};
