import type { ColorScheme, ThemeChangeAction } from "./types";

export const THEME_CHANGE = "theme/CHANGE";

export const changeTheme = (scheme: ColorScheme): ThemeChangeAction => ({
  type: THEME_CHANGE,
  payload: {
    scheme,
  },
});
