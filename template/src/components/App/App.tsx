import * as React from "react";

import "./App.css";
import logo from "../../assets/logo.svg";
import { useChangeColorMode, useTheme } from "../../context/Theme";

export default function App(): JSX.Element {
  const theme = useTheme();
  const changeColorMode = useChangeColorMode();

  const handleChangeColorMode = () =>
    changeColorMode(theme.colors.mode === "dark" ? "light" : "dark");

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <header className="App-container">
        <img alt="logo" className="App-logo" src={logo} />
        <h1 style={{ color: theme.colors.primary }}>Hello, world!</h1>
        <h2 style={{ color: theme.colors.secondary }}>React TypeScript</h2>
      </header>
      <main className="App-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button type="button" onClick={handleChangeColorMode}>
          Toggle Theme
        </button>
      </main>
    </div>
  );
}
