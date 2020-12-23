import { THEME_CHANGE } from "./actions";

export type ColorScheme = "light" | "dark";

export interface ThemeState {
  scheme: ColorScheme;
}

export interface Theme {
  colorScheme: ColorScheme;
  palette: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export interface ThemeChangeAction {
  type: typeof THEME_CHANGE;
  payload: ThemeState;
}

export type ThemeAction = ThemeChangeAction;
