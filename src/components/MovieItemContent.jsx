import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill, BsFillHeartFill } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../features/favoriteSlice";

const MovieItemContent = ({ poster_path, title, overview, vote_average, id, favorited, movie }) => {
    const dispatch = useDispatch();

    const onRemoveFavorite = () => {
        dispatch(deleteFavorite({id : id}))
    }


    const onFavorite = ({movie}) => {
        dispatch(addFavorite(
            {
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average,
                overview: movie.overview
            }
        ));
    }

    return (
        <div className="w-full h-full rounder-b-lg" favorited={favorited}>
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
                <button className={`w-full mt-2 font-semibold ${favorited ? `bg-gray-600 text-red-700 hover:bg-gray-700 hover:text-red-900` : `bg-red-700 hover:bg-red-800 text-white`} justify-center border-none p-0.5 rounded flex content-center`} 
                onClick={favorited ? () =>  onRemoveFavorite() : () => onFavorite({movie})}
                >
                    <BsFillHeartFill className="my-3 mr-3 text-2xl" /> 
                    <span className="my-2 text-base text-white">Favorite</span>
                </button>
            </div>
        </div>
    )
}

export default MovieItemContent;