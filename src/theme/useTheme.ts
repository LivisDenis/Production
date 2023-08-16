import {useContext} from "react";
import {Theme} from "../App";
import {LOCAL_STORAGE_CONTEXT_THEME, ThemeContext} from "./ThemeContext";

interface useThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_CONTEXT_THEME, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
