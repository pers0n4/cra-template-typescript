import * as React from "react";

import { DispatchContext, ThemeContext } from "./ThemeContext";
import { useColorScheme } from "./hooks";
import { palette } from "./theme";

import type { ThemeAction, ThemeOption, ThemeState } from "./types";

const reducer: React.Reducer<ThemeOption, ThemeAction> = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR_MODE":
      return {
        ...state,
        colorMode: action.payload.colorMode,
        colorPalette: palette[action.payload.colorMode],
      };
    case "CHANGE_COLOR_PALETTE":
      return {
        ...state,
        colorPalette: { ...action.payload },
      };
    default:
      throw new Error("ThemeProvider/reducer");
  }
};

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props): JSX.Element {
  const preferredScheme = useColorScheme();
  const initialState: ThemeOption = {
    colorMode: preferredScheme,
    colorPalette: palette[preferredScheme],
  };

  const [options, dispatch] = React.useReducer(reducer, initialState);
  const { colorMode, colorPalette } = options;

  const theme = React.useMemo(() => {
    const nextTheme: ThemeState = {
      colors: {
        ...colorPalette,
        mode: colorMode,
      },
    };
    return nextTheme;
  }, [colorMode, colorPalette]);

  return (
    <ThemeContext.Provider value={theme}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ThemeContext.Provider>
  );
}
