import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import fichaFactory from "../../../factory/fichaFactory";
import type { Ficha } from "../../../models/FichaDTO";

const INITIAL = {
	current: fichaFactory(),
};

const slice = createSlice({
	name: "ficha_edicao",
	initialState: INITIAL,
	reducers: {
		setEdit: (state, action: PayloadAction<Ficha>) => {
			state.current = action.payload;
		},
	},
});

export default slice.reducer;
export const { setEdit } = slice.actions;
