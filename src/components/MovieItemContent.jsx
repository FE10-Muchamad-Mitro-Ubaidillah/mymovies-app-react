import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from 'react-icons/bs';

const MovieItemContent = ({ poster_path, title, overview, vote_average, id, onFavorite }) => {
    
    return (
        <div className="w-full h-full rounder-b-lg">
            <figure><img className="img-card rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} /></figure>
            <Link to={`/detail/${id}`}>
                <div className="flex flex-warp property bg-transparent hover:bg-[#000000a2] rounded-t-lg absolute text-transparent hover:text-white top-0 p-4">
                    <div className="self-end text-xs">
                        <h4 className="w-full font-bold">{title}</h4>
                        <div className="flex items-center">
                            <p className="text-base"><BsStarFill /></p>
                            <p>{vote_average.toFixed(1)} / 10</p>
                        </div>
                        <p>{overview.substring(0, 50)}</p>
                    </div>
                </div>
            </Link>
            <div className="">
                <button className="w-full mt-3 bg-red-700 hover:bg-red-800 text-white border-none p-0.5 rounded" onClick={onFavorite}>+ Add to Favorite</button>
            </div>
        </div>
    )
}

export default MovieItemContent;