import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./theme/ThemeProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)
