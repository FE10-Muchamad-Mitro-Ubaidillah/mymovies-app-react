import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {FaMoon, FaSun} from 'react-icons/fa';
import LocaleContext from "../context/context";

const MovieNavbar = ({ onLogout, name }) => {

    const {theme, toggleTheme} = useContext(LocaleContext);

    return (
        <div className={`navbar ${theme === `dark` ? `bg-gray-800`: `bg-gray-100` } sticky top-0 z-10 py-4 px-16`}>
            <div className="flex-none">
                <Link to="/" className={`font-bold text-3xl ${theme === `dark` ? `text-white`: `text-gray-800`}`}>Movie <span className="text-red-700">77</span></Link>
            </div>
            <div className="flex-1">
                <ul className={`menu menu-horizontal p-0 font-semibold ${theme === `dark` ? `text-white`: `text-gray-800`}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorite">Favorite Movies</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
            <div className="flex-none">
                <button className={`text-3xl ${theme === `dark` ? `text-white`: `text-gray-800`}`} onClick={toggleTheme}>{theme == 'dark' ? <FaSun /> : <FaMoon />}</button>
            </div>
            {name && (
                <>
                    <div className="flex-none mr-3">
                        <p className="text-base font-semibold">Welcome {name}</p>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><button onClick={onLogout}>Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default MovieNavbar;