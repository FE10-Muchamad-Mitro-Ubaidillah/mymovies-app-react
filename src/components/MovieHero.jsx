import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieHero = ({ title, poster_path, overview, id }) => {
    const theme = useSelector((state) => state.theme);

    return (
        <div className={`flex lg:flex-row items-center justify-evenly ${theme === `dark` ? `text-gray-200` : `text-gray-800` } lg:py-20 md:py-8`}>
            <div className="">
                <Link to={`detail/${id}`}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="object-bottom shadow-2xl min-h-full lg:max-h-[600px] md:max-h-[350px] min-w-full max-w-auto" /></Link>
            </div>
            <div className="w-2/5">
                <Link to={`detail/${id}`}><h1 className="text-4xl font-bold">{title}</h1></Link>
                <p className="py-6">{overview}</p>
                <button className={`btn border-white border-2 bg-transparent ${theme === `dark` ? `text-white hover:bg-white hover:text-black` : `text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white` } mr-4`}>+ Add to Favorite</button>
                <button className={`btn bg-red-600 border-none hover:bg-red-700`}>Play Film</button>
            </div>
        </div>
    )
}

export default MovieHero;