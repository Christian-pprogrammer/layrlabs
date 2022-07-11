import React from "react";
import "./App.scss";

import ThemeProvider from "theme";
import { SettingsProvider } from "contexts/SettingsContext";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "routes";

function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;
