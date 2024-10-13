import {
	type ThemeOptions,
	ThemeProvider,
	createTheme,
} from "@mui/material/styles";
import type { PropsWithChildren } from "react";

export const THEME_OPTIONS: ThemeOptions = {
	palette: {
		mode: "dark",
		primary: {
			main: "#FFAC3D",
			dark: "#B06A0B",
			contrastText: "#ffffff",
			light: "#f3d9b5",
		},
		secondary: {
			main: "#70B0E0",
			contrastText: "#052640",
			light: "#badffb",
			dark: "#4e7b9c",
		},
		background: {
			default: "#121212",
			paper: "#2a2a2a",
		},
		text: {
			primary: "#ffffff",
			secondary: "#F3D9B5",
			disabled: "#3d2808",
			// hint: '#d0d0d0',
		},
		divider: "#414141",
	},
};

const theme = createTheme(THEME_OPTIONS);

export const ThemedApp = ({ children }: PropsWithChildren) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
