import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { TitleModelType } from "../../../models/PageModel";

const INITIAL: TitleModelType = {
	title: "Nexus",
};

const slice = createSlice({
	name: "page_config",
	initialState: INITIAL,
	reducers: {
		setTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
	},
});

export default slice.reducer;
export const { setTitle } = slice.actions;
