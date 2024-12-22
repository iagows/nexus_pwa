import { nanoid } from "@reduxjs/toolkit";
import { type Ficha, ModoDaFicha } from "../models/FichaDTO";
import { DateUtil } from "../util/DateUtil";

const fichaFactory = (): Ficha => {
	return {
		xp: 10,
		nivel: 1,
		id: nanoid(),
		nome: "Nome",
		imagem: undefined,
		isFavorito: false,
		narrador: "Alguém",
		profile: {
			age: 500,
			origin: [],
			objectives: [],
			antecedents: [],
			description: "",
			virtues: [],
			flaws: [],
			peculiarities: [],
		},
		modo: ModoDaFicha.CRIACAO,
		criacao: DateUtil.nowString(),
		ultimaVisualizacao: DateUtil.nowString(),
	};
};

export default fichaFactory;
