import * as React from "react";

import { DispatchContext, ThemeContext } from "./ThemeContext";

import type { ThemeState } from ".";
import type { ColorMode, ColorPalette } from "./types";

const colorScheme = {
  dark: "(prefers-color-scheme: dark)",
  light: "(prefers-color-scheme: light)",
};

export function useColorScheme(): ColorMode {
  const isDark = window.matchMedia(colorScheme.dark).matches;

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue({ isDark });
  }

  return isDark ? "dark" : "light";
}

export const useTheme = (): ThemeState => {
  const theme = React.useContext(ThemeContext);

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme;
};

export function useChangeColorMode(): (colorMode: ColorMode) => void {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback(
    (colorMode: ColorMode) =>
      dispatch({ type: "CHANGE_COLOR_MODE", payload: { colorMode } }),
    [dispatch],
  );
}

export function useChangeColorPalette(): (colorPalette: ColorPalette) => void {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback(
    (colorPalette: ColorPalette) =>
      dispatch({ type: "CHANGE_COLOR_PALETTE", payload: colorPalette }),
    [dispatch],
  );
}
