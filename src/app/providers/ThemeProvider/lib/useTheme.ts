import { useCallback, useContext } from 'react';
import { LOCAL_STORAGE_CONTEXT_THEME, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_CONTEXT_THEME, newTheme);
  }, [setTheme, theme]);

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
