import PropTypes from "prop-types";
import { createContext } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { defaultSettings } from "config/ThemeConfig";

const initialState = {
  ...defaultSettings,
  onChangeMode: () => {},
  onToggleMode: () => {},
  onResetSetting: () => {},
  colorOption: [],
};

const SettingsContext = createContext(initialState);

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
  });

  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      isSidebarExpanded: true,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onChangeMode,
        onToggleMode,
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

export { SettingsProvider, SettingsContext };
