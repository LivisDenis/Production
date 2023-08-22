import { useContext } from 'react';
import { LOCAL_STORAGE_CONTEXT_THEME, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_CONTEXT_THEME, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
