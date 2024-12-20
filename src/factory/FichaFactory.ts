import { nanoid } from "@reduxjs/toolkit";
import { type Ficha, ModoDaFicha } from "../models/FichaDTO";
import { DateUtil } from "../util/DateUtil";

const FichaFactory = (): Ficha => {
	return {
		xp: 10,
		nivel: 1,
		id: nanoid(),
		origem: [],
		nome: "Nome",
		imagem: undefined,
		isFavorito: false,
		narrador: "Alguém",
		descricao: "Descrição",
		modo: ModoDaFicha.CRIACAO,
		criacao: DateUtil.nowString(),
		ultimaVisualizacao: DateUtil.nowString(),
	};
};

export default FichaFactory;
