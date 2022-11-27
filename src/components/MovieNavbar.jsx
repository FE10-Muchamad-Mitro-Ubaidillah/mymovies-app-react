import React from "react";
import { Link } from "react-router-dom";

const MovieNavbar = () => {
    return (
        <div className="px-20 bg-gray-800 py-5 flex items-center drop-shadow text-white sticky top-0 z-10">
            <div className="flex-1">
                <Link to="/" className="text-3xl font-bold">Movie <span className="text-red-700">77</span></Link>
            </div>
            <div className="justify-self-end font-semibold text-base">
                <Link className="px-3" to="/">Home</Link>
                <Link className="px-3" to="/favorite">Favorite Movies</Link>
            </div>
        </div>
    )
}

export default MovieNavbar;