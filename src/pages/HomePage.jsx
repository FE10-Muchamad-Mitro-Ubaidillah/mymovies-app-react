import React, { useState, useEffect } from "react";
import api from "../services/api";
import MovieItemContent from "../components/MovieItemContent";
import MovieHero from "../components/MovieHero";
import { AiOutlineLoading } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useSelector((state) => state.theme);
    const favorite = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    console.log(favorite);

    let slide_index = 1;
    let next = 2;

    const onHandlerFavorite = (e) => {
        dispatch(addFavorite(
            {
                id: e.id,
                title: e.title,
                poster_path: e.poster_path,
                vote_average: e.vote_average,
                overview: e.overview
            }
        ));
    }

    useEffect(() => {
        const fetchData = async () => {
            await api.getNowPlayingMovies("now_playing")
                .then(response => {
                    setMovies(response.data.results);
                })
                .catch(error => {
                    alert(error);
                })
            setLoading(false);
        }
        fetchData();
    }, []);


    return (
        <>
            {loading && (
                <div className={`relative h-screen w-screen ${theme === 'dark' ? `bg-gray-800 text-white` : `bg-white text-black`} `}>
                    <div className="absolute top-60 left-1/2 text-center">
                        <AiOutlineLoading className="animate-spin w-20 h-20" />
                        <p className="text-xl">Loading...</p>
                    </div>
                </div>
            )
            }
            {!loading && (
                <>
                    <div className={`carousel w-full ${theme === `dark` ? `bg-gray-800` : `bg-slate-200`}`}>
                        {
                            movies.map(movie => (
                                <div className="carousel-item relative w-full" key={movie.id} id={slide_index++}>
                                    <MovieHero {...movie} />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href={`#${next - 2}`} className="btn btn-circle text-base">❮</a>
                                        <a href={`#${next++}`} className="btn btn-circle text-base">❯</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="p-10 mt-10">
                        <div className="my-10">
                            <h2 className={`text-2xl mb-5 font-bold ${theme === `dark` ? `text-gray-200` : `text-gray-800`}`}>Favorite Movies</h2>
                            <div className="relative overflow-auto w-auto">
                                <div className={`flex overflow-x-auto scrollbar-thin ${theme === `dark` ? `scrollbar-thumb-gray-700 scrollbar-track-gray-600` : `scrollbar-thumb-gray-500 scrollbar-track-gray-600`} p-5`}>
                                    {movies.map(movie => (
                                        <div className="flex-none relative first:mr-3 last:ml-3 mx-3" key={movie.id}>
                                            <MovieItemContent
                                                {...movie}
                                                onFavorite={() => onHandlerFavorite(movie)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="my-10">
                            <h2 className={`text-2xl mb-5 font-bold ${theme === `dark` ? `text-gray-200` : `text-gray-800`}`}>Now Playing</h2>
                            <div className="relative w-auto">
                                <div className="grid grid-cols-7 gap-6">
                                    {movies.map(movie => (
                                        <div className="w-auto relative" key={movie.id}>
                                            <MovieItemContent
                                                {...movie}
                                                onFavorite={() => onHandlerFavorite(movie)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </ >
    )
}

export default HomePage;