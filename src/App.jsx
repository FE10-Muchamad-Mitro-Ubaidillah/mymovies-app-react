import React, { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import MovieNavbar from "./components/MovieNavbar";
import MovieFooter from "./components/MovieFooter";
import LocaleContext from "./context/context";

import "./assets/custom.css";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    }

    const LocaleContextValue = useMemo(() => {
        return {
            toggleTheme,
            theme
        }
    }, [theme]);
    
    return (
        <>
            <LocaleContext.Provider value={LocaleContextValue}>
                <div className={`${theme === `dark` ? `bg-gray-800` : `bg-white` } h-full w-full text-white`}>
                    <MovieNavbar toggleTheme={() => toggleTheme()} />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/detail/:id" element={<DetailPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                    <MovieFooter />
                </div>
            </LocaleContext.Provider>
        </>
    )
}

export default App;