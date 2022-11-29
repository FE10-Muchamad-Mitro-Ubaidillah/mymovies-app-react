import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieItemContent from "../components/MovieItemContent";

const FavoritePage = () => {
    const theme = useSelector((state) => state.theme);
    const favorite = JSON.parse(sessionStorage.getItem('favorite'));
    
    return (
        <div className="h-full my-16 mx-20">
            <h2 className={`text-2xl mb-5 font-bold ${theme === `dark` ? `text-gray-200` : `text-gray-800`}`}>Favorite Movies</h2>
            <div className="relative w-auto">
                <div className="grid grid-cols-7 gap-6">
                    {
                        favorite.map(item => (
                            <div className="w-auto relative">
                                <MovieItemContent title={item.title} id={item.id} vote_average={item.vote_average} overview={item.overview} poster_path={item.poster_path} />
                            </div>
                            // console.log(item.id)
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default FavoritePage;