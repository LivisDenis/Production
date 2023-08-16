import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {Suspense} from "react";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button type={'button'} onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy />}/>
                    <Route path={'/about'} element={<AboutPageLazy />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App
