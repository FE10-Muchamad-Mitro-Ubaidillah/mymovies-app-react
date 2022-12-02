import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MovieNavbar from "./components/MovieNavbar";
import MovieFooter from "./components/MovieFooter";
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";
import FavoritePage from "./pages/FavoritePage";

import "./assets/custom.css";
import { changeTheme } from "./features/themeSlice";

const App = () => {
    const [cookie, removeCookie] = useCookies();
    const theme = useSelector((state) => state.theme);

    const dispatch = useDispatch();

    const onLogoutHandler = (e) => {
        removeCookie("name");
        // navigate('/login');
        e.preventDefault();
    }

    return (
        <div className={`${theme === `dark` ? `bg-gray-800` : `bg-white`} max-w-screen`}>
            {cookie.name === 'undefined' ?
                (
                    <MovieNavbar toggleTheme={() => dispatch(changeTheme())} />
                ) :
                (
                    <MovieNavbar toggleTheme={() => dispatch(changeTheme())} name={cookie.name} onLogout={() => onLogoutHandler()} cookie={cookie.name} />
                )
            }
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
            </Routes>
            <MovieFooter />
        </div>
    )
}

export default App;