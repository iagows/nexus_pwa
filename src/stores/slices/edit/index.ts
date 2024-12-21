import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import FichaFactory from "../../../factory/FichaFactory";
import type { Ficha } from "../../../models/FichaDTO";

const INITIAL = {
	current: FichaFactory(),
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
