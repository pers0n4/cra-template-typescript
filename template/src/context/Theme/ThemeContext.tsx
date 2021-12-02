import * as React from "react";

import type { ThemeAction, ThemeState } from "./types";

export const ThemeContext = React.createContext({} as ThemeState);
export const DispatchContext = React.createContext<React.Dispatch<ThemeAction>>(
  () => {
    throw new Error("ThemeProvider/DispatchContext");
  },
);

if (process.env.NODE_ENV !== "production") {
  ThemeContext.displayName = "ThemeContext";
  DispatchContext.displayName = "ThemeDispatchContext";
}
