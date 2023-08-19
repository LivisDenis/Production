import React, {useMemo, useState} from 'react';
import {Theme, ThemeContext} from "../lib/ThemeContext";

interface ThemeProvider{
    children: React.ReactNode
}

const defaultTheme = localStorage.getItem('theme') as Theme || Theme.LIGHT

export const ThemeProvider = ({children}: ThemeProvider) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
