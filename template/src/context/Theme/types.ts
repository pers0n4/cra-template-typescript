export type ColorMode = "dark" | "light";
export type ColorPalette = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
};

export type ThemeOption = {
  colorMode: ColorMode;
  colorPalette: ColorPalette;
};

export type ThemeState = {
  colors: {
    mode: ColorMode;
  } & ColorPalette;
};

const ThemeActions = {
  CHANGE_COLOR_MODE: "CHANGE_COLOR_MODE",
  CHANGE_COLOR_PALETTE: "CHANGE_COLOR_PALETTE",
} as const;
export type ThemeActionType = typeof ThemeActions[keyof typeof ThemeActions];

export interface ThemeActionChangeColorMode {
  type: typeof ThemeActions.CHANGE_COLOR_MODE;
  payload: { colorMode: ColorMode };
}

export interface ThemeActionChangeColorPalette {
  type: typeof ThemeActions.CHANGE_COLOR_PALETTE;
  payload: ColorPalette;
}

export type ThemeAction =
  | ThemeActionChangeColorMode
  | ThemeActionChangeColorPalette;
