import React from "react";
import { Link } from "react-router-dom";

const MovieHero = ({ title, poster_path, overview, id }) => {
    return (
        <div className="flex lg:flex-row items-center justify-evenly text-white lg:py-20 md:py-8">
            <div className="">
                <Link to={`detail/${id}`}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="object-bottom shadow-2xl min-h-full lg:max-h-[600px] md:max-h-[350px] min-w-full max-w-auto" /></Link>
            </div>
            <div className="w-2/5">
                <Link to={`detail/${id}`}><h1 className="text-4xl font-bold">{title}</h1></Link>
                <p className="py-6">{overview}</p>
                <button className="btn border-white border-2 bg-transparent text-white hover:bg-white hover:text-black mr-4">+ Add to Favorite</button>
                <button className="btn bg-red-600 border-none hover:bg-red-700">Play Film</button>
            </div>
        </div>
    )
}

export default MovieHero;