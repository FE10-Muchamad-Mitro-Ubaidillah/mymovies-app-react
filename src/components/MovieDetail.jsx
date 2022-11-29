import React from "react";
import { useSelector } from "react-redux";

const MovieDetail = ({ poster_path, title, overview, genres, vote_average }) => {
    const theme = useSelector((state) => state.theme);
    return (
        <div className={`flex flex-row flex-row-reverse items-center justify-evenly  ${theme === `dark` ? `text-white bg-gray-700` : `text-gray-800 bg-slate-200` } text-white md:py-8`}>
            <div className="">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="object-bottom shadow-2xl min-h-full lg:max-h-[500px] md:max-h-[350px] min-w-full max-w-auto" />
            </div>
            <div className="w-2/5">
                <h1 className="text-4xl font-bold">{title}</h1>
                <div className="py-6">
                    <div className="py-5">
                        {genres.map(genre => (
                            <span key={genre.id} className="border-solid border-2 border-gray-500 p-1.5 rounded mx-1.5 first:ml-0">{genre.name}</span>
                        ))}
                    </div>

                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                        <span>{vote_average.toFixed(1)} / 10</span>
                    </div>

                    <p className="">{overview}</p>
                </div>
                <button className={`btn border-white border-2 bg-transparent ${theme === `dark` ? `text-white hover:bg-white hover:text-black` : `text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white` } mr-4`}>+ Add to Favorite</button>
                <button className="btn bg-red-600 border-none hover:bg-red-700">Play Film</button>
            </div>
        </div>
    )
}

export default MovieDetail;