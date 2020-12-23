import type { ThemeState, ThemeAction } from "./types";
import { THEME_CHANGE } from "./actions";

export const initialThemeState: ThemeState = {
  scheme: "light",
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        scheme: action.payload.scheme,
      };
    default:
      throw new Error("ThemeAction");
  }
};
