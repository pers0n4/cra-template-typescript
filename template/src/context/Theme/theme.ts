import type { ColorPalette } from "./types";

const dark: ColorPalette = {
  primary: "#00abc0",
  secondary: "#f0eee9",
  background: "#212121",
  text: "#fff",
};

const light: ColorPalette = {
  primary: "#5f4b8b",
  secondary: "#3178C6",
  background: "#fafafa",
  text: "rgba(0, 0, 0, 0.87)",
};

export const palette = { dark, light };
export const typography = {
  fontFamily: "sans-serif",
  fontSize: 16,
};
