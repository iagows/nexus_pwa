import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import fichaFactory from "../../../factory/fichaFactory";
import type { Ficha } from "../../../models/FichaDTO";

const INITIAL = {
	current: fichaFactory(),
	step: 0,
};

const slice = createSlice({
	name: "ficha_edicao",
	initialState: INITIAL,
	reducers: {
		setEdit: (state, action: PayloadAction<Ficha>) => {
			state.current = {
				...action.payload,
			};
		},
		nextStep: (state) => {
			console.log("vai", state.step);
			state.step = state.step + 1;
		},
		prevStep: (state) => {
			state.step = state.step - 1;
		},
	},
});

export default slice.reducer;
export const { setEdit, nextStep, prevStep } = slice.actions;
