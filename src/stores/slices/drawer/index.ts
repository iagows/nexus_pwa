import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { DrawerModelType } from "../../../models/DrawerModel";

const INITIAL: DrawerModelType = {
	isClosing: false,
	isMobileOpen: false,
};

const slice = createSlice({
	name: "drawer_config",
	initialState: INITIAL,
	reducers: {
		setClosing: (state, action: PayloadAction<boolean>) => {
			state.isClosing = action.payload;
		},
		setMobileOpen: (state, action: PayloadAction<boolean>) => {
			state.isMobileOpen = action.payload;
		},
		invertClosing: (state) => {
			state.isClosing = !state.isClosing;
		},
	},
});

export default slice.reducer;
export const { setClosing, setMobileOpen, invertClosing } = slice.actions;
