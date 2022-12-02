import React from "react";
import { useSelector } from "react-redux";
import MovieItemContent from "../components/MovieItemContent";

const FavoritePage = () => {
    const theme = useSelector((state) => state.theme);
    const stateFavorite = useSelector((state) => state.favorite);

    return (
        <div className="my-16 mx-20">
            <h2 className={`text-2xl mb-5 font-bold ${theme === `dark` ? `text-gray-200` : `text-gray-800`}`}>Favorite Movies</h2>
            <div className="relative w-auto">
                {
                    stateFavorite.length ?
                        <div className="grid grid-cols-7 gap-6">
                            {
                                stateFavorite.map(item => (
                                    <div className="w-auto relative">
                                        <MovieItemContent {...item} id={item.id} favorited={true}/>
                                    </div>
                                ))
                            }

                        </div>
                        :
                        <div className={`text-white h-80 flex justify-center content-center`}>
                            <h1 className="text-3xl font-light mt-20">Favorite Empty</h1>
                        </div>
                }
            </div>
        </div>
    )
}

export default FavoritePage;