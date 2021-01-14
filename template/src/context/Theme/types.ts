export type ColorScheme = 'light' | 'dark';

export interface Theme {
  colorScheme: ColorScheme;
  palette: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}
export interface ThemeState {
  scheme: ColorScheme;
}

export enum Action {
  CHANGE_THEME = 'theme/CHANGE',
}

export interface ThemeChangeAction {
  type: Action.CHANGE_THEME;
  payload: ThemeState;
}

export type ThemeAction = ThemeChangeAction;
