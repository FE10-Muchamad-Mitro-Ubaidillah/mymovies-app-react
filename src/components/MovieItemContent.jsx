import React from "react";
import { Link } from "react-router-dom";

const MovieItemContent = ({ poster_path, title, overview, popularity, id }) => {
    return (
        <div className="w-full h-full rounder-b-lg">
            <figure><img className="img-card rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} /></figure>
            <Link to={`/detail/${id}`}>
                <div className="flex flex-warp property bg-transparent hover:bg-[#000000a2] rounded-t-lg absolute text-transparent hover:text-white top-0 p-4">
                    <div className="self-end text-xs">
                        <h4 className="w-full font-bold">{title}</h4>
                        <p>{popularity}</p>
                        <p>{overview.substring(0, 50)}</p>
                    </div>
                </div>
            </Link>
            <div className="">
                <button className="w-full mt-3 bg-red-700 hover:bg-red-800 text-white border-none p-0.5 rounded">+ Add to Favorite</button>
            </div>
        </div>
    )
}

export default MovieItemContent;