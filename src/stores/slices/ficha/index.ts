import {
	type PayloadAction,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import { compareAsc } from "date-fns";
import type { Ficha } from "../../../models/FichaDTO";

const sorter = (a: Ficha, b: Ficha): number => {
	if (a.isFavorito && !b.isFavorito) {
		return -1;
	}
	if (b.isFavorito && !a.isFavorito) {
		return 1;
	}

	return compareAsc(a.ultimaVisualizacao, b.ultimaVisualizacao);
};

const adapter = createEntityAdapter<Ficha>({
	sortComparer: sorter,
});

const fichasSlice = createSlice({
	name: "fichas",
	initialState: adapter.getInitialState(),
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {
		create: adapter.addOne,
		update: adapter.addMany,
		delete_: adapter.removeMany,
		invertFavorite: (state, action: PayloadAction<string>) => {
			adapter.updateOne(state, {
				id: action.payload,
				changes: {
					isFavorito: !state.entities[action.payload].isFavorito,
				},
			});
		},
	},
});

export default fichasSlice.reducer;
export const { create, update, delete_, invertFavorite } = fichasSlice.actions;
export const { selectAll, selectById, selectTotal } = adapter.getSelectors();
